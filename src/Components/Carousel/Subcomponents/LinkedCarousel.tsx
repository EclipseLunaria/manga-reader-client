import React, { ReactNode } from 'react';
import Slider, { Settings as SliderSettings } from 'react-slick';
import { CarouselButton } from './Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LinkingCarousel = (props: {
  autoplay?: boolean;
  children: ReactNode[];
  setRef: (slider: Slider | null) => void;
  sliderLink?: Slider;
  settingOverride?: Partial<SliderSettings>;
  styleOverride?: string;
}) => {
  const defaultSettings: SliderSettings = {
    autoplay: props.autoplay,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: <CarouselButton direction="right" />,
    prevArrow: <CarouselButton direction="left" />,
  };

  const settings = { ...defaultSettings, ...props.settingOverride };

  return (
    <Slider
      className={props.styleOverride ?? ''}
      {...settings}
      ref={(slider) => props.setRef(slider)}
      asNavFor={props.sliderLink}
    >
      {props.children}
    </Slider>
  );
};

export default LinkingCarousel;
