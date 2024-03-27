import { ScrollToTop } from '@components';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { HomePageType } from './types';
import NBAImg from '../../assets/images/NBAImage.png';
import NFLImg from '../../assets/images/NFLImage.jpg';
import MLBImg from '../../assets/images/MLBImage.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePageUI({ featured_trunks }: HomePageType) {
  const [countdownValueDay, setCountdownValueDay] = useState<number>(6);
  const [countdownValueHour, setCountdownValueHour] = useState<number>(23);
  const [countdownValueMin, setCountdownValueMin] = useState<number>(59);
  const [countdownValueSec, setCountdownValueSec] = useState<number>(59);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdownValueSec > 0) {
        setCountdownValueSec(countdownValueSec - 1);
      } else if (countdownValueMin > 0) {
        setCountdownValueMin(countdownValueMin - 1);
        setCountdownValueSec(59); // Reset seconds to 59
      } else if (countdownValueHour > 0) {
        setCountdownValueHour(countdownValueHour - 1);
        setCountdownValueMin(59); // Reset minutes to 59
        setCountdownValueSec(59); // Reset seconds to 59
      } else if (countdownValueDay > 0) {
        setCountdownValueDay(countdownValueDay - 1);
        setCountdownValueHour(23); // Reset hours to 23
        setCountdownValueMin(59); // Reset minutes to 59
        setCountdownValueSec(59); // Reset seconds to 59
      } else {
        setCountdownValueDay(6); // Set initial value for days
        setCountdownValueHour(23);
        setCountdownValueMin(59);
        setCountdownValueSec(59); // Stop the countdown when all values are 0
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    countdownValueDay,
    countdownValueHour,
    countdownValueMin,
    countdownValueSec,
  ]);

  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const totalMilliseconds =
      countdownValueDay * 24 * 60 * 60 * 1000 +
      countdownValueHour * 60 * 60 * 1000 +
      countdownValueMin * 60 * 1000 +
      countdownValueSec * 1000;

    const today = new Date();
    const nextDate = new Date(today.getTime() + totalMilliseconds);
    const formattedDay = nextDate.toLocaleDateString(undefined, {
      weekday: 'long',
    });
    setCurrentDay(formattedDay);
  }, [countdownValueDay, countdownValueHour, countdownValueMin]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <ScrollToTop />
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://www.betus.com.pa/wp-content/uploads/2023/10/sports-equinox-there-are-nfl-mlb-mls-nhl-and-nba-games-today-10-30-2023-min.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Lockers Unlocked
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
              Get full access to
              <br className="hidden md:block" />
              your Favorite Players{' '}
              <span className="inline-block text-red400">Stache</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              College athletes can now take full advantage of the new NIL rules
              and allow fans to get some of their some of their locker. Explore
              your favorite teams and players and Your Gear!
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red400 hover:bg-red500 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-bold text-black transition-colors duration-200 hover:text-red500"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <section className="flex justify-center items-center md:p-10 bg-lightGray p-6 font-gilroy gap-3 flex-col">
        <div className="bg-white rounded-lg dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
          <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-9">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">Welcome to Lockers Unlocked</span>
            </h2>
            <p className="text-md mt-4 text-black">
              You get full access to your favorite professional and college
              players stache! Here at Lockers Unlocked, players will be able to
              post their own items such as game worn attire, personal branding,
              and signed memorabilia and be able to sell them directly to you
              the consumer! No more middle man getting in the way of athletes
              selling some of their gear. College athletes can now take full
              advantage of the new NIL rules and allow fans to get some of their
              some of their locker. Explore your favorite teams and players and
              Your Gear!
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0 flex items-center items-stretch justify-center md:items-start md:justify-start">
              <div className="mt-12 w-full mt-4 md:w-auto inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-2 px-4  bg-red400 hover:bg-red500 focus:ring-red400 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  About Us
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 p-8 lg:p-24">
            <div className="w-[120%]">
              <img
                src={NBAImg}
                className="w-full h-full rounded-lg object-contain drop-shadow-2xl"
                alt="NBA"
              />
            </div>
            <div>
              <img
                src={NFLImg}
                className="mb-8 rounded-lg object-contain drop-shadow-2xl"
                alt="NFL"
              />
              <img
                src={MLBImg}
                className="rounded-lg object-contain drop-shadow-2xl"
                alt="MLB"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Trunk Drops */}
      <section className="py-8 bg-red400 m-10 rounded-md bg-gradient md:py-16">
        <div className="box-content max-w-5xl px-5 mx-auto">
          <div className="flex flex-col items-center -mx-5 md:flex-row">
            <div className="w-full px-5 mb-5 text-center md:mb-0 md:text-left">
              <h4 className="flex flex-col text-2xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                <span className="text-xl sm:text-3xl">Next</span>
                Trunk Drops
              </h4>
              <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">
                {currentDay}
              </h3>
              <div className="w-full mt-4 md:w-44">
                <button
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-red500 hover:text-white focus:ring-red400 focus:ring-offset-indigo-200 text-red400 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Enter Here
                </button>
              </div>
            </div>
            <div className="w-full px-5 md:w-auto">
              <div className="flex justify-center text-center text-white">
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    {countdownValueDay.toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75">Day</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    {countdownValueHour.toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Hour</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    {countdownValueMin.toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">Min</div>
                </div>
                <div className="w-20 py-3 mx-2 border rounded-lg md:w-24 border-light-300 bg-light-100 md:py-4">
                  <div className="text-2xl font-semibold md:text-3xl">
                    {countdownValueSec.toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 text-xs uppercase opacity-75 ">
                    Second
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Trunks */}
      <section className="flex flex-col font-gilroy object-contain mb-10">
        <p className="uppercase md:mt-5 mb-10 mt-10 font-black md:text-3xl text-2xl text-center">
          <strong>Featured Trunks</strong>
        </p>
        <Link
          to="/"
          className="text-black underline-offset-1 mr-8 mb-2 font-extrabold text-base text-end"
        >
          <span className="py-2 px-4  bg-red400 hover:bg-red500 focus:ring-red400 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            View All
          </span>
        </Link>
        <div className="container mx-auto object-contain">
          <Slider {...settings}>
            {featured_trunks &&
              featured_trunks?.map((element) => {
                return (
                  <Link
                    key={element.key}
                    to="/"
                    className="flex-shrink-0 mb-8 bg-white shadow-lg rounded-full text-center p-3 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="flex md:flex-row flex-col items-center justify-center gap-5 ">
                      <span>
                        <img
                          src={element.src}
                          className="h-40 w-40 rounded-full"
                          alt=""
                        />
                      </span>
                      <span className="font-bold md:text-4xl text-xl">
                        {element.text}
                      </span>
                    </div>
                  </Link>
                );
              })}
          </Slider>
        </div>
      </section>
    </div>
  );
}
