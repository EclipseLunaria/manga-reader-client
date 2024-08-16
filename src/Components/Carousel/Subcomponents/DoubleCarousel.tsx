import React, { useState, useEffect, useRef } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import LinkingCarousel from './LinkedCarousel';
import { CarouselTransformer } from '../transformers';

const DoubleCarousel = <T,>(props: {
  data: T[];
  transformer1: CarouselTransformer<T>;
  transformer2: CarouselTransformer<T>;
  sliderOverride1?: Partial<SliderSettings>;
  sliderOverride2?: Partial<SliderSettings>;
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
        setRef={setRef1}
        sliderLink={nav2 ?? undefined}
        settingOverride={props.sliderOverride1}
      />
      <LinkingCarousel
        children={props.data.map((item) => props.transformer2(item))}
        setRef={setRef2}
        sliderLink={nav1 ?? undefined}
        autoplay
        settingOverride={props.sliderOverride2}
      />
    </div>
  );
};

export default DoubleCarousel;
