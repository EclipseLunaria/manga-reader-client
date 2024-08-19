import React from 'react';
import DoubleCarousel from './Subcomponents/DoubleCarousel';
import { carouselCardTransformer, mangaCardTransformer } from './transformers';
import getMangaList from '../../utils/hooks/getMangaList';

const PopularMangaCarousel = () => {
  const { seriesInfoList } = getMangaList('popular');
  return (
    <DoubleCarousel
      data={seriesInfoList ?? []}
      transformer1={mangaCardTransformer}
      transformer2={carouselCardTransformer}
      sliderOverride1={{
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      }}
      sliderOverride2={{
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }}
    />
  );
};

export default PopularMangaCarousel;
