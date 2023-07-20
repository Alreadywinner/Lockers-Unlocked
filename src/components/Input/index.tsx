import React, { forwardRef } from 'react';
import { InputProps } from './types';

const Input = forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { placeHolder, className, ...rest },
  ref,
) {
  return (
    <input
      placeholder={placeHolder}
      className={className}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = 'Input'; // Add the display name here

export default Input;
