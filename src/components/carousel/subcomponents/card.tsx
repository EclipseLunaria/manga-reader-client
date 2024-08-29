import React from 'react';
import { SeriesInfo } from '../../../utils/types';
const CarouselCard = (props: { series: SeriesInfo }) => {
  return (
    <div className="carousel-card-container flex  overflow-hidden ">
      <img
        src={props.series.image}
        alt={props.series.title}
        className="h-48 rounded-xl"
      />
    </div>
  );
};

export default CarouselCard;
