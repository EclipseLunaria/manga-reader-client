import React from 'react';
import { SeriesInfoBox } from '../../models/seriesInfo';
import { SeriesInfo } from '../../utils/types';

const MangaCard = (props: SeriesInfo & { bgDisabled?: boolean }) => {
  console.log('manga card props', props);
  return (
    <a
      href={`/title/${props.manga_id}`}
      className={`manga-card ${props.bgDisabled ? 'bg-none' : 'bg-secondary'}`}
    >
      <div className="image-container">
        <img
          src={props.image}
          alt={props.title}
          className="h-full w-64 rounded-lg relative object-fill"
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
