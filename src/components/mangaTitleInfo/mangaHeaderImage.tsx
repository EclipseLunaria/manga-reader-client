import React from 'react';

const MangaHeaderImage = (props: { image: string }) => {
  return (
    <>
      <div className="series-header-image min-w-[200px] h-auto relative">
        <img src={props.image} className=" w-full object-cover" />
      </div>
    </>
  );
};

export default MangaHeaderImage;
