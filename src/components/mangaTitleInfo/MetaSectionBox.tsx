import React from 'react';

const MetaSectionBox = (props: {
  author: string;
  genres: string[];
  status: string;
}) => {
  return (
    <div className="meta-section-box flex flex-col p-4 z-10">
      <div className="status py-4">
        <div className="label text-2xl py-2 bold">Status:</div>
        <div className="value text-xl italic">{props.status}</div>
      </div>
      <div className="author py-4">
        <div className="label text-2xl py-2 bold">Author(s):</div>
        <div className="value text-xl italic">{props.author}</div>
      </div>
      <div className="genres">
        <div className="label text-2xl py-2 bold">Genres:</div>
        <div className="flex flex-wrap">
          {props.genres.map((genre) => (
            <span
              key={genre}
              className="genre bg-blue-500 mx-1 my-1 p-1 rounded-md text-xl i text-white bold"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaSectionBox;
