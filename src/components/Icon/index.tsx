import React from 'react';
import { IconProps } from './types';

function Icon({ IconDivStyle, children }: IconProps) {
  return <div className={IconDivStyle}>{children}</div>;
}

export default Icon;
