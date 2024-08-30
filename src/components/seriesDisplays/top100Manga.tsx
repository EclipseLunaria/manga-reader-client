import React from 'react';
import { SeriesInfo } from '../../utils/types';
import RankedSeriesCard from './rankedSeriesCard';

const TopXManga = (props: { series: SeriesInfo[]; start?: number }) => {
  const { series, start } = props;
  const groupedSeries: SeriesInfo[][] = series
    .slice(start ?? 0)
    .reduce((acc, _, i, arr) => {
      if (i % 6 === 0) {
        acc.push(arr.slice(i, i + 6));
      }
      return acc;
    }, [] as SeriesInfo[][]);
  return (
    <div className="">
      {groupedSeries.map((group, index) => (
        <TopXMangaRow series={group} start={index * 6 + (props.start ?? 0)} />
      ))}
    </div>
  );
};

const TopXMangaRow = (props: { series: SeriesInfo[]; start: number }) => {
  return (
    <div className="grid grid-cols-6 grid-flow-row my-24 gap-x-4">
      {props.series.map((series, index) => (
        <div
          className="col-span-1 w-50 h-80  "
          key={index + (props.start ?? 0)}
        >
          <RankedSeriesCard
            seriesInfo={series}
            index={index + (props.start ?? 0)}
          />
        </div>
      ))}
    </div>
  );
};

export default TopXManga;
