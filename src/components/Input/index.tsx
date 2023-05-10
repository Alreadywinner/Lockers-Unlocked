import React from 'react';
import { InputProps } from './types';

function Input({ placeHolder, className, ...rest }: InputProps) {
  return <input placeholder={placeHolder} className={className} {...rest} />;
}

export default Input;
