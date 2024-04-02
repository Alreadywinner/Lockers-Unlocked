import { ScrollToTop } from '@components';
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { HomeHeroHeaderImg, NFLImg, MLBImg, TrunkDropImg } from '@Images';
import { HomePageType } from './types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function HomePageUI({ featured_trunks }: HomePageType) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            src={HomeHeroHeaderImg}
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
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red400 hover:bg-red500 focus:shadow-outline focus:outline-none"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                aria-label=""
                className="inline-flex items-center font-bold text-black transition-colors duration-200 hover:text-red500 hover:underline"
              >
                Learn more
              </Link>
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
            <div className="lg:mt-0 lg:flex-shrink-0 flex items-center justify-center md:items-start md:justify-start">
              <div className="mt-12 w-full md:w-auto inline-flex rounded-md shadow">
                <button
                  type="button"
                  className="py-2 px-4  bg-red400 hover:bg-red500 focus:ring-red400 focus:ring-offset-none text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  <Link to="/about">About Us</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex relative flex-col items-center justify-center w-full gap-8 p-8 lg:p-24 md:p-14">
            <div>
              <img
                src={NFLImg}
                className="mb-8 rounded-lg object-contain relative drop-shadow-2xl"
                alt="NFL"
              />
              <img
                src={MLBImg}
                className="rounded-lg object-contain relative drop-shadow-2xl"
                alt="MLB"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Next Trunk Drops */}
      <section className="overflow-hidden bg-red400 m-10 rounded-md bg-gradient-to-r from-red400 to-red500 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center items-center ltr:sm:text-left rtl:sm:text-right">
            <h4 className="flex flex-col mt-6 text-2xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-6xl dark:text-white">
              <span className="text-xl sm:text-3xl mb-2">Next</span>
              Trunk Drops
            </h4>
            <div className="mt-4 md:mt-8">
              <h3 className="text-2xl font-bold text-white font-heading md:text-4xl">
                Coming Soon
              </h3>
            </div>
          </div>
        </div>
        <img
          alt=""
          src={TrunkDropImg}
          className="h-56 w-full object-cover sm:h-full md:w-auto"
        />
      </section>

      {/* Featured Trunks */}
      <section className="flex flex-col font-gilroy object-contain mb-10">
        <p className="uppercase md:mt-5 mb-10 mt-10 font-black md:text-3xl text-2xl text-center">
          <strong>Featured Trunks</strong>
        </p>
        <div className="container mx-auto object-contain overflow-hidden px-3">
          <Slider {...settings}>
            {featured_trunks &&
              featured_trunks?.map((element) => {
                return (
                  <Link
                    key={element.key}
                    to="/"
                    className="flex-shrink-0 mb-8 bg-white shadow-lg rounded-full text-center p-3 cursor-pointer transition-transform duration-300 hover:-translate-y-2 h-52 w-52"
                  >
                    <div className="flex md:flex-row flex-col items-center justify-center gap-5">
                      <span>
                        <img
                          src={element.src}
                          className="md:h-40 md:w-40 h-28 w-28 rounded-full"
                          alt=""
                        />
                      </span>
                      <span className="font-bold lg:text-4xl md:text-2xl text-lg">
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
