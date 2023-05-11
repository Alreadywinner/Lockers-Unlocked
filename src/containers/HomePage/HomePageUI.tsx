import { Button, Card, Carousel, Footer, Input, NavBar } from '@components';
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
      <NavBar />
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
      <section className="rounded bg-gradient-to-br from-white to-gray shadow-xl font-gilroy flex">
        <div className="w-50 flex items-center justify-center p-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0414/2111/1457/files/showcase_packs-min_720x.png?v=1677086293"
            className="w-2/3"
            alt="nil-trading"
          />
        </div>
        <div className="w-50 text-black justify-center flex flex-col gap-7">
          <p className="font-bold uppercase tracking-[.3em]">
            OFFICIALLY LICENSED
          </p>
          <p className="font-extrabold uppercase text-3xl">
            NIL TRADING CARD PACKS
          </p>
          <p className="font-bold underline underline-offset-1 uppercase text-lg">
            1 GUARANTEED AUTOGRAPH IN EACH PACK! COLLECT THEM ALL NOW!
          </p>
          <Button
            type="button"
            className="bg-red w-32 p-3 rounded text-extrabold text-white uppercase"
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
        />
      </section>
      {/* find fav player */}
      <section className="font-gilroy bg-red flex bg-texture flex items-center justify-center gap-5 h-32 text-white">
        <p className="text-xl font-extrabold uppercase">
          find your favorite player
        </p>
        <p className="text-xm">Browse all player trunks</p>
        <Button type="button" className="bg-black text-white p-3 rounded">
          View All
        </Button>
      </section>
      {/* Now Live */}
      <section className="flex justify-center items-center mt-5 bg-fcfcfc shadow-2xl p-6 font-gilroy gap-3 flex-col">
        <p className="text-black uppercase font-extrabold text-3xl">
          next trunk drops
        </p>
        <p className="text-black uppercase font-bold">
          The Wait Is Almost Over
        </p>
        <Button className="bg-red rounded text-white font-extrabold text-lg p-2">
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
        <p className="uppercase mt-5 mb-8 font-extrabold text-3xl">trending</p>
        <div className="flex gap-5 justify-between">
          {trendingTrunks &&
            trendingTrunks?.map((element) => {
              return (
                <Card
                  key={element.title}
                  cardDiv="bg-white rounded-t-lg shadow font-gilroy flex justify-between flex-col hover:cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  imgProps={{
                    src: element.imgSrc,
                    img_alt: 'temporary',
                    className: 'rounded-t-lg w-full h-full',
                  }}
                >
                  <div className="p-5 bg-white">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                      {element.title}
                    </h5>

                    <p className="mb-3 font-normal text-gray">
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
      <section className="p-10 bg-fcfcfc shadow-2xl text-center font-gilroy">
        <p className="uppercase mt-5 mb-8 font-extrabold text-3xl">
          featured trunks
        </p>
        <div className="flex h-45 justify-center gap-5 mb-6">
          {featured_trunks &&
            featured_trunks?.map((element) => {
              return (
                <Link
                  to="/"
                  key={element.key}
                  className="bg-gray-300 p-3 rounded-full shadow-xl flex flex-col justify-between text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
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
          className="underline underline-offset-1 mt-8 mb-8 font-extrabold text-base"
        >
          view all trunks
        </Link>
      </section>
      <Footer />
    </div>
  );
}
