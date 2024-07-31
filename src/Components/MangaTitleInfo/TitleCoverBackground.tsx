import React from 'react';

const TitleCoverBackground = (props: { cover: string; title: string }) => {
  return (
    <div className="cover-image-background fixed w-screen h-72 left-0 top-0 opacity-50 z-0 pointer-events-none overflow-hidden">
      <img
        src={props.cover}
        alt={props.title}
        className="w-screen bg-no-repeat m-0 absolute z-0 "
        style={{ top: '-30%' }}
      />
    </div>
  );
};

export default TitleCoverBackground;
