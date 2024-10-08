import React from 'react';
import MangaCard from '../seriesDisplays';
import CarouselCard from './subcomponents/card';
import { SeriesInfo } from '../../utils/types';

type CarouselTransformer<T> = (item: T, key?: number) => React.ReactNode;

const mangaCardTransformer: CarouselTransformer<SeriesInfo> = (series) => {
  if (!series) {
    return null;
  }
  return (
    <div className="px-4 w-full justify-center flex">
      <MangaCard {...series} bgDisabled />
    </div>
  );
};

const carouselCardTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <CarouselCard series={series} />
);

export { mangaCardTransformer, carouselCardTransformer, CarouselTransformer };
