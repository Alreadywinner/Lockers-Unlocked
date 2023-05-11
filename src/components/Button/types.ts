import { ReactNode } from 'react';

export interface ButtonPropType extends React.HTMLProps<HTMLButtonElement> {
  text?: string;
  className: string;
  children: ReactNode;
}
