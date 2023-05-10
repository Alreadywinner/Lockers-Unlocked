import { ReactNode } from 'react';

export interface IconProps extends React.HTMLProps<HTMLOrSVGElement> {
  IconDivStyle?: string;
  children: ReactNode;
}
