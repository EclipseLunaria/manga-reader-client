import React from 'react';
import { SeriesInfo } from '../../utils/getSeriesInfoHook';
import TitleCoverBackground from './TitleCoverBackground';
const MangaTitleInfo = (props: SeriesInfo) => {
  return (
    <div className="manga-title-info relative">
      <TitleCoverBackground cover={props.image} title={props.title} />


      <div className="title-info-container p-2 z-10">
        <div className="title-info">
          <div className="title-info-title text-3xl text-white font-bold">
            {props.title}
          </div>
          <div className="title-info-author text-xl text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default MangaTitleInfo;
