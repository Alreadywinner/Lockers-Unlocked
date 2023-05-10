import React from 'react';
import { ButtonPropType } from './types';

function Button({ text, className, ...rest }: ButtonPropType) {
  return (
    <div className={className} {...rest}>
      {text}
    </div>
  );
}

export default Button;
