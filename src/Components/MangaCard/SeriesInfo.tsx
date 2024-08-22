import React from 'react';
import { SeriesInfo } from '../../utils/types';

export const SeriesInfoBox = (props: { seriesInfo: SeriesInfo }) => {
  return (
    <div className="series-info-box">
      <div className="series-top-info p-2">
        <div className="series-info-author italic text-xl">
          Author: {props.seriesInfo.author}
        </div>
        <div className="series-genres">
          {props.seriesInfo.genres.map((genre) => (
            <span
              key={genre}
              className="series-genre text-md bg-blue-500 mx-1 px-1 rounded-md text-yellow-300"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      <div className="series-description-container">
        <div className="bold p-1 text-2xl ">Description:</div>
        <div
          className="series-info-description no-scrollbar pb-1 pt-3"
          style={{ overflowY: 'auto', height: '150px' }}
        >
          {props.seriesInfo.description}
        </div>
      </div>
    </div>
  );
};
