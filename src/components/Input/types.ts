import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeHolder?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
}
