import React, { useState } from 'react';
import { SeriesInfo } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
const RankedSeriesCard = (props: { seriesInfo: SeriesInfo; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="relative cursor-pointer hover:scale-105 transition-all bg-gradient-to-b from-black to-black/5 hover:from-green-500 hover:shadow-lg shadow-green-700  hover:to-green-transparent rounded-t-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/title/${props.seriesInfo.manga_id}`)}
    >
      <div className="absolute h-full w-full -z-10  rounded-lg  shadow-green-700"></div>

      <div className="p-2 ">
        <img src={props.seriesInfo.image} className=" h-64 w-52 rounded-t-lg" />
        <div className="relative rounded   h-8 flex flex-col justify-center text-white/90 text-lg ">
          <div
            className={`absolute h-8 w-1/5 bg-gradient-to-r  from-black rounded-bl-lg`}
          />
          <div
            className={`absolute h-8 right-0 w-3/5 bg-gradient-to-l  from-black rounded-br-lg`}
          />
          <div className="pl-2 z-10 w-full flex">
            <div>{props.index + 1}</div>
            <div className="rating-star ml-auto text-white text-sm my-auto px-2">
              {props.seriesInfo.status}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-2 relative">
        <div className={`text-xl ${isHovered ? '' : 'truncate  text-nowrap'}`}>
          {props.seriesInfo.title}
        </div>
        <div className={`text-sm ${isHovered ? '' : 'truncate  text-nowrap'}`}>
          {props.seriesInfo.author}
        </div>
      </div>
    </div>
  );
};

export default RankedSeriesCard