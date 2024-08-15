import React from 'react';
import { SeriesInfo } from '../../../../utils/types';
const CarouselCard = (props: { series: SeriesInfo }) => {
  return (
    <div className="carousel-card-container flex-none px-2 overflow-hidden ">
      <img
        src={props.series.image}
        alt={props.series.title}
        className="h-full rounded-xl"
      />
    </div>
  );
};

export default CarouselCard;
