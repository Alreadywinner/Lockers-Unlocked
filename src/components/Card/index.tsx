import React, { useEffect, useState } from 'react';
import { TeamsDataType } from 'containers/types';
import { CardProps } from './types';

const calculateTimeLeft = (endTime: string) => {
  const now = new Date().getTime();
  const endDateTime = new Date(endTime).getTime();
  const timeLeft = endDateTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

function Card({ item, onClick }: CardProps) {
  const {
    fileSrc,
    title,
    description,
    currentBid,
    startingBid,
    endDate,
    endTime,
  } = item;

  function isEndDateReached(currentEndDate: string) {
    // Convert the input end date to a Date object
    const endDateTime = new Date(currentEndDate);

    // Get the current date
    const currentDate = new Date();

    // Extract the year, month, and day from both dates
    const endYear = endDateTime.getUTCFullYear();
    const endMonth = endDateTime.getUTCMonth();
    const endDay = endDateTime.getUTCDate();

    const currentYear = currentDate.getUTCFullYear();
    const currentMonth = currentDate.getUTCMonth();
    const currentDay = currentDate.getUTCDate();

    // Compare the year, month, and day
    return (
      currentYear > endYear ||
      (currentYear === endYear && currentMonth > endMonth) ||
      (currentYear === endYear &&
        currentMonth === endMonth &&
        currentDay >= endDay)
    );
  }

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

  useEffect(() => {
    let animationFrameId: number;

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft(endTime));
      animationFrameId = requestAnimationFrame(updateTimer);
    };

    updateTimer();

    return () => cancelAnimationFrame(animationFrameId);
  }, [endTime]);

  const { days, hours, minutes, seconds } = timeLeft;
  function sendEmails(expiredItem: TeamsDataType) {
    // Perform backend call to firebase
    // Makeup a post request and send full item to it
    // Email: Item details plus lockers unlocked payment link (www.lockersunlocked.com/paymentlink/userId)
    // Status: Pending, Successful, Declined
    // Construct the payload to be sent to the backend
    // const payload = {
    //   item, // Full item details
    // };
    // Make an API call using fetch
    fetch(
      'https://us-central1-lockers-unlocked.cloudfunctions.net/app/send-email',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expiredItem }),
      },
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Email sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  useEffect(() => {
    if (isEndDateReached(endDate)) {
      // Perform actions when timer expires (send emails)
      // sendEmails(item);
    }
  }, [endDate]);

  if (!isEndDateReached(endDate)) {
    return (
      <div
        className="lg:w-80 lg:h-[35rem] w-96 h-96 pb-2 rounded overflow-hidden shadow-lg transition-transform duration-300 md:hover:-translate-y-2 flex flex-col justify-between"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={onClick}
      >
        <div className="h-3/5">
          <img
            src={fileSrc}
            alt="temporary"
            className="rounded-t-lg w-full h-full object-cover"
            height="24rem"
            width="24rem"
          />
        </div>
        <div className="h-2/5 px-6 py-4 flex flex-col justify-evenly">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base mb-1.5 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {description}
          </p>
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1.5">
              Current Bid: {currentBid} $
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
              Starting Bid: {startingBid} $
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              Time Left: {days}d {hours}h {minutes}m {seconds}s
            </span>
          </div>
          <div className="flex items-center">
            <div className="flex flex-row items-center justify-around">
              <img
                alt="user_pic"
                src={item.user.fileSrc}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-semibold ml-2">
                Uploaded By: {item.user.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="lg:w-80 lg:h-[35rem] w-96 h-96 pb-2 rounded overflow-auto shadow-lg transition-transform duration-300 md:hover:-translate-y-2 flex flex-col justify-between"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={onClick}
    >
      <div className="h-3/5">
        <img
          src={fileSrc}
          alt="temporary"
          className="rounded-t-lg w-full h-full object-cover"
          height="24rem"
          width="24rem"
        />
      </div>
      <div className="h-2/5 px-6 py-2 flex flex-col justify-evenly">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-1.5 overflow-hidden whitespace-nowrap overflow-ellipsis">
          {description}
        </p>
        <div>
          <div className="flex flex-row md:flex-col">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1.5">
              Current Bid: {currentBid} $
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1">
              Starting Bid: {startingBid} $
            </span>
          </div>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Time Left: Expired
          </span>
          <button type="button" onClick={() => sendEmails(item)}>
            Test
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex flex-row items-center justify-around ml-1">
            <span className="text-sm font-semibold ml-2 mr-4">
              Uploaded By:
            </span>
            <img
              alt="user_pic"
              src={item.user.fileSrc}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm font-semibold ml-2">{item.user.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
