import { Button, Carousel } from '@components';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageType } from './types';

export default function HomePageUI({ featured_trunks }: HomePageType) {
  return (
    <div>
      <Carousel />
      {/* About Us */}
      <section className="flex justify-center items-center md:p-10 bg-lightGray p-6 font-gilroy gap-3 flex-col">
        <p className="text-black md:text-center text-justify uppercase font-extrabold md:text-lg md:text-xl text-md md:p-5">
          Welcome to Lockers Unlocked, where you get full access to your
          favorite professional and college players stache! Here at Lockers
          Unlocked, players will be able to post their own items such as game
          worn attire, personal branding, and signed memorabilia and be able to
          sell them directly to you the consumer! No more middle man getting in
          the way of athletes selling some of their gear. College athletes can
          now take full advantage of the new NIL rules and allow fans to get
          some of their locker. Explore your favorite teams and players and Grab
          Your Gear!
        </p>
      </section>
      {/* Next trunk tops */}
      <section className="flex justify-center items-center bg-red shadow-2xl p-6 font-gilroy gap-3 flex-col">
        <p className="text-white uppercase font-extrabold md:text-3xl text-xl">
          next trunk drops
        </p>
        <p className="text-white uppercase md:font-bold">
          The Wait Is Almost Over
        </p>
        <Button className="bg-black rounded text-white font-extrabold md:text-lg text-base p-2">
          Enter Here
        </Button>
      </section>
      {/* featured trunks */}
      <section className="flex flex-col font-gilroy mb-10">
        <p className="uppercase md:mt-5 mb-10 mt-10 font-extrabold md:text-3xl text-xl text-center">
          featured trunks
        </p>
        <div className="flex overflow-x-auto space-x-8 p-2 lg:justify-center">
          {featured_trunks &&
            featured_trunks?.map((element) => {
              return (
                <Link
                  key={element.key}
                  to="/"
                  className="flex-shrink-0 bg-white shadow-lg rounded-full text-center p-3 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                >
                  <span>
                    <img
                      src={element.src}
                      className="h-40 w-40 rounded-full "
                      alt=""
                    />
                  </span>
                  <span>{element.text}</span>
                </Link>
              );
            })}
        </div>
        <Link
          to="/"
          className="underline underline-offset-1 mt-8 mb-10 font-extrabold text-base text-center"
        >
          view all trunks
        </Link>
      </section>
    </div>
  );
}
