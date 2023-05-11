import { CarouselType } from 'components/Carousel/types';

export type HomePageType = {
  slides: CarouselType;
  featured_trunks: Array<{ src: string; key: number; text: string }>;
  trendingTrunks: Array<{ imgSrc: string; title: string }>;
};
