import { BasketBallIcon } from '@Icon';
import React from 'react';

function AboutPage() {
  return (
    <div className="font-gilroy flex flex-col items-center mt-10 mb-10">
      <p className="text-center mb-10 text-4xl font-extrabold">About Us</p>
      <BasketBallIcon width={300} height={300} />
      <p className="mt-16 text-center max-w-xl text-lg leading-normal text-gray500 lg:text-xl">
        Welcome to{' '}
        <span className="ml-1 text-cyan max-w-xl text-3xl font-extrabold leading-none xl:inline">
          Lockers Unlocked
        </span>
        , where you get full access to your favorite professional and college
        players stache!
      </p>
      <p className="mt-16 text-center max-w-xl text-lg leading-normal text-gray500 lg:text-xl">
        Here at{' '}
        <span className="ml-1 text-cyan max-w-xl text-xl font-extrabold leading-none xl:inline">
          Lockers Unlocked
        </span>
        , players will be able to post their own items such as game worn attire,
        personal branding, and signed memorabilia and be able to sell them
        directly to you the consumer!
      </p>
      <p className="mt-16 text-center max-w-xl text-lg leading-normal text-gray500 lg:text-xl">
        No more middle man getting in the way of athletes selling some of their
        gear.
      </p>
      <p className="mt-16 text-center max-w-xl text-lg leading-normal text-gray500 lg:text-xl">
        College athletes can now take full advantage of the new NIL rules and
        allow fans to get some of their locker.
      </p>
      <p className="mt-16 text-center max-w-xl text-lg leading-normal text-gray500 lg:text-xl">
        Explore your favorite teams and players and Grab Your Gear!
      </p>
    </div>
  );
}

export default AboutPage;
