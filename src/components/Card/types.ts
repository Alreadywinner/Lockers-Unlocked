import { ReactNode } from 'react';

interface ImagePropType extends React.HTMLProps<HTMLImageElement> {
  src: string;
  img_alt: string;
}
export type CardProps = {
  cardDiv: string;
  children: ReactNode;
  imgProps: ImagePropType;
};
