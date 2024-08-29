import React from 'react';

const MangaHeaderBox = (props: { title: string; author: string }) => {
  return (
    <div className="series-header-box flex flex-col p-4 z-10 max-w-full pr-48">
      <div className="series-name text-4xl font-bold truncate text-wrap">
        {props.title}
      </div>
      <div className="series-alternative-name text-4xl truncate"></div>
      <div className="series-author text-2xl italic mt-auto pb-0">
        {props.author}
      </div>
    </div>
  );
};

export default MangaHeaderBox;
