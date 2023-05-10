import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from './types';

function Card({ imgProps }: CardProps) {
  return (
    <Link className="max-w-sm bg-white rounded-t-lg shadow font-gilroy" to="/">
      <img alt={imgProps.img_alt} {...imgProps} />
      <div className="p-5 bg-white">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
          Noteworthy technology acquisitions 2021
        </h5>

        <p className="mb-3 font-normal text-gray">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
}

export default Card;
