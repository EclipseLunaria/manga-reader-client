import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import LinkingCarousel from './LinkedCarousel';
import { CarouselTransformer } from '../types';

const DoubleCarousel = <T,>(props: {
  data: T[];
  transformer1: CarouselTransformer<T>;
  transformer2: CarouselTransformer<T>;
}) => {
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
    <div className="flex flex-col">
      <LinkingCarousel
        children={props.data.map((item) => props.transformer1(item))}
        slotCount={1}
        setRef={setRef1}
        sliderLink={nav2 ?? undefined}
        disableButton
      />
      <LinkingCarousel
        children={props.data.map((item) => props.transformer2(item))}
        slotCount={8}
        setRef={setRef2}
        sliderLink={nav1 ?? undefined}
        autoplay
      />
    </div>
  );
};

export default DoubleCarousel;
