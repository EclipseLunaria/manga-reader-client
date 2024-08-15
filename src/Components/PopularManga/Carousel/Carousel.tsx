import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import MangaCard from '../../MangaCard';
import { SeriesInfo } from '../../../utils/types';
import LinkingCarousel from './LinkingCarousel';
import CarouselCard from './Subcomponents/Card';

const Carousel = (props: { seriesList: SeriesInfo[] }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const setRef1 = (slider: Slider | null) => {
    sliderRef1.current = slider;
  };
  const setRef2 = (slider: Slider | null) => {
    sliderRef2.current = slider;
  };
  return (
    <div className="">
      <LinkingCarousel
        children={props.seriesList.map((series, index) => (
          <MangaCard {...series} key={index} />
        ))}
        slotCount={1}
        setRef={setRef1}
        sliderLink={nav2 ?? undefined}
        disableButton
      />
      <LinkingCarousel
        children={props.seriesList.map((series, index) => (
          <CarouselCard series={series} key={index} />
        ))}
        slotCount={5}
        setRef={setRef2}
        sliderLink={nav1 ?? undefined}
      />
    </div>
  );
};

export default Carousel;
