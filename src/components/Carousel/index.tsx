import { NextIcon, PreviousIcon } from '@Icon';
import React, { useState } from 'react';
import { Button } from '@components';
import { CarouselType } from './types';

export default function Carousel({ slides }: CarouselType) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden">
        {/* Slides */}
        {slides &&
          slides?.map((slide, index) => (
            <div
              key={slide.key}
              className={`${
                index === currentSlide ? 'block' : 'hidden'
              } transition duration-500 ease-in-out transform hover:scale-110`}
              data-carousel-item
            >
              <img
                src={slide.src}
                className="w-full h-full cursor-pointer object-cover"
                alt="..."
              />
            </div>
          ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {slides &&
          slides.map((element, index) => (
            <button
              key={element.key}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide
                  ? 'bg-white'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => handleSlideClick(index)}
            />
          ))}
      </div>
      {/* Slider controls */}
      <Button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handlePrevClick}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <PreviousIcon color="black" />
          <span className="sr-only">Previous</span>
        </span>
      </Button>
      <Button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={handleNextClick}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <NextIcon color="black" />

          <span className="sr-only">Next</span>
        </span>
      </Button>
    </div>
  );
}
