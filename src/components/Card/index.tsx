import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from './types';

function Card({ imgProps, cardDiv, children }: CardProps) {
  return (
    <Link className={cardDiv} to="/">
      <img alt={imgProps.img_alt} {...imgProps} />
      {children}
    </Link>
  );
}

export default Card;
