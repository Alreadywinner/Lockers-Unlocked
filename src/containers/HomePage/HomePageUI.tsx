import { Button, Card, Carousel, Input } from '@components';
import React from 'react';
import { Link } from 'react-router-dom';
import { HomePageType } from './types';

export default function HomePageUI({
  slides,
  featured_trunks,
  trendingTrunks,
}: HomePageType) {
  return (
    <div>
      <Carousel slides={slides.slides} />
      {/* Sign Up and Save */}
      <section className="bg-red font-gilroy flex items-center justify-center flex-col p-4 bg-texture">
        <p className="font-extrabold text-white text-transform: uppercase text-2xl mt-4 mb-2">
          Sign Up and Save
        </p>
        <p className="font-extrabold text-white text-lg mt-4 mb-4">
          Subscribe for first access to trunk drops, sales and more.
        </p>
        <div className="flex mt-4 mb-3">
          <Input
            placeHolder="Enter your email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <Button
            type="button"
            className="ml-3 bg-red text-white text-base font-extrabold "
          >
            Subscribe
          </Button>
        </div>
      </section>
      <section className="rounded bg-gradient-to-br from-white to-gray shadow-xl font-gilroy flex md:flex-row flex-col">
        <div className="w-50 flex items-center justify-center p-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0414/2111/1457/files/showcase_packs-min_720x.png?v=1677086293"
            className="md:w-2/3 w-full"
            alt="nil-trading"
          />
        </div>
        <div className="w-50 text-black justify-center md:items-start items-center flex flex-col gap-7">
          <p className="md:font-bold uppercase tracking-[.3em] ">
            OFFICIALLY LICENSED
          </p>
          <p className="md:font-extrabold uppercase md:text-3xl text-xl">
            NIL TRADING CARD PACKS
          </p>
          <p className="md:font-bold underline underline-offset-1 uppercase md:text-lg text-base md:text-left text-center">
            1 GUARANTEED AUTOGRAPH IN EACH PACK! COLLECT THEM ALL NOW!
          </p>
          <Button
            type="button"
            className="bg-red w-32 p-3 rounded text-extrabold text-white uppercase md:mb-0 mb-5"
          >
            Shop Now
          </Button>
        </div>
      </section>
      {/* players card image */}
      <section>
        <img
          src="https://cdn.shopify.com/s/files/1/0414/2111/1457/files/Website_1800x.jpg?v=1663375801"
          alt="stars"
          className="w-full"
        />
      </section>
      {/* find fav player */}
      <section className="font-gilroy bg-red flex bg-texture flex md:flex-row flex-col items-center justify-center gap-5 md:h-32 h-60 text-white">
        <p className="md:text-xl md:font-extrabold uppercase">
          find your favorite player
        </p>
        <p className="md:text-xm">Browse all player trunks</p>
        <Button type="button" className="bg-black text-white p-3 rounded">
          View All
        </Button>
      </section>
      {/* Next trunk tops */}
      <section className="flex justify-center items-center mt-5 bg-fcfcfc shadow-2xl p-6 font-gilroy gap-3 flex-col">
        <p className="text-black uppercase font-extrabold md:text-3xl text-xl">
          next trunk drops
        </p>
        <p className="text-black uppercase md:font-bold">
          The Wait Is Almost Over
        </p>
        <Button className="bg-red rounded text-white font-extrabold md:text-lg text-base p-2">
          Enter Here
        </Button>
      </section>
      {/* players img */}
      <section>
        <img
          src="https://cdn.shopify.com/s/files/1/0414/2111/1457/files/trunk_drop_countdown_-_2023-05-10T194524.166_1600x.png?v=1683762357"
          alt="players"
        />
      </section>
      {/* Trending */}
      <section className="bg-fcfcfc shadow-2xl flex flex-col p-3 mt-3 mb-5 text-center font-gilroy">
        <p className="uppercase mt-5 mb-8 font-extrabold md:text-3xl text-xl">
          trending
        </p>
        <div className="flex gap-5 justify-between overflow-y-hidden md:whitespace-nowrap whitespace-nowrap">
          {trendingTrunks &&
            trendingTrunks?.map((element) => {
              return (
                <Card
                  key={element.title}
                  cardDiv="md:w-60 md:p-4 w-40 h-96 rounded-t-lg shadow font-gilroy flex justify-between flex-col hover:cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  imgProps={{
                    src: element.imgSrc,
                    img_alt: 'temporary',
                    className: 'rounded-t-lg md:w-full md:h-full h-60',
                  }}
                >
                  <div className="p-5 bg-white text-ellipsis overflow-hidden">
                    <h5 className="mb-2 md:text-2xl text-base font-bold tracking-tight text-black">
                      {element.title}
                    </h5>

                    <p className="mb-3 font-normal text-gray hidden md:block">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                  </div>
                </Card>
              );
            })}
        </div>
      </section>
      {/* featured trunks */}
      <section className="md:p-10 md:mb-0 mb-10 shadow-2xl text-center font-gilroy">
        <p className="uppercase md:mt-5 mb-10 mt-10 font-extrabold md:text-3xl text-xl">
          featured trunks
        </p>
        <div className="flex md:h-45 h-60 justify-center gap-5 mb-6 overflow-y-hidden whitespace-nowrap">
          {featured_trunks &&
            featured_trunks?.map((element) => {
              return (
                <Link
                  to="/"
                  key={element.key}
                  className="bg-white p-3 md:mb-0 mb-10 rounded-full shadow-xl flex flex-col justify-between text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="w-full h-full">
                    <img
                      src={element.src}
                      alt="featured"
                      className="w-full h-full object-fill rounded-full"
                    />
                  </div>
                  <p className="text-black p-3">{element.text}</p>
                </Link>
              );
            })}
        </div>
        <Link
          to="/"
          className="underline underline-offset-1 mt-8 mb-10 font-extrabold text-base"
        >
          view all trunks
        </Link>
      </section>
    </div>
  );
}
