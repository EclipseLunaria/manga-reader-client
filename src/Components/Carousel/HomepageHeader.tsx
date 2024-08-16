import React from 'react';
import DoubleCarousel from './Subcomponents/DoubleCarousel';
import { CarouselTransformer, mangaCardTransformer } from './transformers';
import { getMangaList } from '../../utils/hooks';
import { SeriesInfo } from '../../utils/types';

const HomepageCourasel = () => {
  const { seriesInfoList } = getMangaList('popular');
  return (
    <DoubleCarousel
      data={seriesInfoList ?? []}
      transformer1={mangaCardTransformer}
      transformer2={homeBgTransformer}
    />
  );
};

export default HomepageCourasel;

const homeBgTransformer: CarouselTransformer<SeriesInfo> = (series) => (
  <img
    src={series.image}
    alt={series.title}
    className="object-cover w-full h-full"
  />
);
