import React from 'react';
import { ButtonPropType } from './types';

function Button({ children, type, className, ...rest }: ButtonPropType) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type as 'button' | 'submit' | 'reset'}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
