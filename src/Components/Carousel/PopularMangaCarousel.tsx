import React from 'react';
import DoubleCarousel from './Subcomponents/DoubleCarousel';
import { SeriesInfo } from '../../utils/types';
import { CarouselTransformer } from './types';
import MangaCard from '../MangaCard';
import CarouselCard from './Subcomponents/Card';
import getSeriesListHook from '../../utils/hooks/getMangaList';
const PopularMangaCarousel = () => {
  const { seriesInfoList } = getSeriesListHook('popular');
  return (
    <DoubleCarousel
      data={seriesInfoList ?? []}
      transformer1={mangaCardTransformer}
      transformer2={carouselCardTransformer}
    />
  );
};

export default PopularMangaCarousel;

const mangaCardTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <div className="px-4 justify-center flex">
    <MangaCard {...series} />
  </div>
);

const carouselCardTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <CarouselCard series={series} />
);
