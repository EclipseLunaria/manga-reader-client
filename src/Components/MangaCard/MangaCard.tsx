import React from 'react';
import { SeriesInfoBox } from './SeriesInfo';
import { SeriesInfo } from '../../utils/types';

// TODO: Fix styling for long titles to not stretch the card image
const MangaCard = (props: SeriesInfo) => {
  console.log('manga card props', props);
  return (
    <a
      href={`/title/${props.manga_id}`}
      className="manga-card w-full bg-secondary h-80 rounded-md p-1 flex flex-row m-2"
    >
      <div className="image-container h-full p-2 relative">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-auto rounded-lg relative"
        />
        <div className="rating absolute bottom-2 right-2 bg-black bg-opacity-50 rounded-md p-1">
          <span className="text-yellow-400 ml-1">★</span>
        </div>
      </div>
      <div className="manga-title-container relative w-full ">
        <div className="manga-title text-white text-left text-3xl text-nowrap overflow-hidden pr-2">
          {props.title}
        </div>
        <div className="manga-info h-full">
          <SeriesInfoBox seriesInfo={props} />
        </div>
      </div>
    </a>
  );
};

export default MangaCard;
