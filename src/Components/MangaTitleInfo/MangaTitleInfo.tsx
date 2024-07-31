import React from 'react';
import { SeriesInfo } from '../../utils/getSeriesInfoHook';
import TitleCoverBackground from './TitleCoverBackground';
import MangaHeaderImage from './MangaHeaderImage';
import MangaHeaderBox from './MangaHeaderBox';
const MangaTitleInfo = (props: SeriesInfo) => {
  return (
    <div className="manga-title-info relative text-white flex">
      <TitleCoverBackground cover={props.image} title={props.title} />
      <div className="series-header-container flex flex-row w-full ">
        <MangaHeaderImage image={props.image} />

        <MangaHeaderBox title={props.title} author={props.author} />
      </div>
    </div>
  );
};

export default MangaTitleInfo;
