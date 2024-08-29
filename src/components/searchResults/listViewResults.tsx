import React, { useState } from 'react';

import { SeriesInfo } from '../../utils/types';
import MangaCard from '../seriesDisplays';

const ListViewResults = (props: { results?: SeriesInfo[] }) => {
  console.log(props.results);
  return (
    <div className="search-results-container">
      {props.results &&
        props.results.map((result, index) => (
          <div
            className="rounded-lg hover:scale-105 transition-transform hover:shadow-lg hover:shadow-green-700"
            key={index}
          >
            <MangaCard key={index} {...result} />
          </div>
        ))}
    </div>
  );
};

export default ListViewResults;
