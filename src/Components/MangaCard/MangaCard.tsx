import React from 'react';
import { SeriesInfoBox } from './SeriesInfo';
export type MangaCardProps = {
  title: string;
  link: string;
  image: string;
  author: string;
  rating: string;
  seriesId: string;
};
// TODO: Fix styling for long titles to not stretch the card image
const MangaCard = (props: MangaCardProps) => {
  return (
    <a
      href={`/title/${props.seriesId}`}
      className="manga-card w-full bg-secondary h-80 rounded-md p-1 flex flex-row m-2"
    >
      <div className="image-container h-full p-2 relative">
        <img
          src={props.image}
          alt={props.title}
          className="h-full rounded-lg relative"
        />
        <div className="rating absolute bottom-2 right-2 bg-black bg-opacity-50 rounded-md p-1">
          {props.rating}
          <span className="text-yellow-400 ml-1">★</span>
        </div>
      </div>
      <div className="manga-title-container relative w-full ">
        <div className="manga-title text-white text-left text-3xl text-nowrap overflow-hidden pr-2">
          {props.title}
        </div>
        <div className="manga-info h-full">
          <SeriesInfoBox mangaId={props.seriesId} />
        </div>
      </div>
    </a>
  );
};

export default MangaCard;
