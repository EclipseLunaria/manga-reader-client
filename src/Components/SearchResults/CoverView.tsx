import React from 'react';

import { SeriesInfo } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

const CoverView = (props: { results?: SeriesInfo[] }) => {
  const navigate = useNavigate();
  if (!props.results) {
    return null;
  }
  return (
    <div className="search-results-container grid grid-flow-row grid-cols-6 gap-4 w-full mt-4 ">
      {props.results &&
        props.results.map((result, index) => (
          <div
            key={index}
            className="cover-card relative cursor-pointer rounded-lg hover:scale-105 transition-transform hover:shadow-lg hover:shadow-green-700"
            onClick={() => {
              navigate(`/title/${result.manga_id}`);
            }}
          >
            <img
              src={result.image}
              alt={result.title}
              className="h-full w-full rounded-lg "
            />
            <div className="absolute w-full h-24 text-wrap bottom-0 bg-gradient-to-t to-transparent from-black/70 rounded-xl">
              <div
                className="text-xs absolute bottom-0 p-4 text-white"
                style={{ textShadow: 'green 2px 1px 5px' }}
              >
                {result.title}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CoverView;
