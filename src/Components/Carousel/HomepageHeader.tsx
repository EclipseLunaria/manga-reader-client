import React, { useState } from 'react';
import DoubleCarousel from './Subcomponents/DoubleCarousel';
import { CarouselTransformer, mangaCardTransformer } from './transformers';
import { getMangaList } from '../../utils/hooks';
import { SeriesInfo } from '../../utils/types';

const HomepageCourasel = () => {
  const { seriesInfoList } = getMangaList('popular');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  return (
    <DoubleCarousel
      data={seriesInfoList ?? []}
      transformer1={mangaCardTransformer}
      transformer2={(series) => homeBgTransformer(series, currentSlide)}
      sliderOverride1={{
        beforeChange: handleSlideChange,
      }}
      styleOverride2="absolute left-0 top-0 inset-0 w-screen h-full z-[-1]"
    />
  );
};

export default HomepageCourasel;

const homeBgTransformer: CarouselTransformer<SeriesInfo> = (
  series: SeriesInfo,
  key,
) => {
  if (!key) return null;
  return (
    <img
      src={series.image}
      alt={series.title}
      className="w-full h-screen bg-cover bg-center"
    />
  );
};
