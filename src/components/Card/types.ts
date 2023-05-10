interface ImagePropType extends React.HTMLProps<HTMLImageElement> {
  src: string;
  img_alt: string;
}
export type CardProps = {
  cardDiv: string;
  cardImageDiv: string;
  imgProps: ImagePropType;
  cardText: string;
};
