import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import { CarouselButton } from './Subcomponents/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LinkingCarousel = (props: {
  children: ReactNode[];
  slotCount: number;
  setRef: (slider: Slider | null) => void;
  sliderLink?: Slider;
  disableButton?: boolean;
}) => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.slotCount,
    slidesToScroll: 1,
    nextArrow: <CarouselButton direction="right" />,
    prevArrow: <CarouselButton direction="left" />,
    arrows: !props.disableButton,
  };

  return (
    <Slider
      className="h-96"
      {...settings}
      ref={(slider) => props.setRef(slider)}
      asNavFor={props.sliderLink}
    >
      {props.children}
    </Slider>
  );
};

export default LinkingCarousel;
