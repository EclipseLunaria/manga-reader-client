import React from 'react';
import { SeriesInfo } from '../../utils/types';
import RankedSeriesCard from './rankedSeriesCard';

const Top5Series = (props: { seriesData: SeriesInfo[] | null }) => {
  if (props.seriesData === null) {
    return null;
  }
  return (
    <div className="flex w-full h-full relative">
      <div className="grid grid-cols-5 h-80 gap-2 relative">
        <div className="absolute h-1/3 w-full p-4 rounded-lg"></div>
        {props.seriesData.slice(0, 5).map((series, index) => {
          return (
            <div className="col-span-1 h-fit mx-2" key={index}>
              <RankedSeriesCard seriesInfo={series} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Top5Series;
