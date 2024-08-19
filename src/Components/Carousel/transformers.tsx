import React from 'react';
import MangaCard from '../MangaCard';
import CarouselCard from './Subcomponents/Card';
import { SeriesInfo } from '../../utils/types';

type CarouselTransformer<T> = (item: T, key?: number) => React.ReactNode;

const mangaCardTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <div className="px-4 justify-center flex m-4">
    <MangaCard {...series} bgDisabled />
  </div>
);

const carouselCardTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <CarouselCard series={series} />
);

export { mangaCardTransformer, carouselCardTransformer, CarouselTransformer };
