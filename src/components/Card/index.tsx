import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from './types';

function Card({ item }: CardProps) {
  const { imgSrc, title, description, currentBid, startingBid } = item;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform duration-300 md:hover:-translate-y-2">
      <Link to="/">
        <img src={imgSrc} alt="temporary" className="rounded-t-lg w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Current Bid: {currentBid} $
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Starting Bid: {startingBid} $
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
