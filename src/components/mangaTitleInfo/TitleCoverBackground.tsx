import React, { useState } from 'react';

const TitleCoverBackground = (props: { cover: string; title: string }) => {
  const [currentScroll, setCurrentScroll] = useState(0);
  window.onscroll = () => {
    setCurrentScroll(window.scrollY);
  };
  return (
    <div className="h-full w-screen">
      <div
        style={{ height: `calc(300px - ${currentScroll}px)` }}
        className="cover-image-background fixed w-screen h-72 left-0 top-0 opacity-25 pointer-events-none overflow-hidden"
      >
        <img
          src={props.cover}
          alt={props.title}
          className="w-screen bg-no-repeat m-0 absolute "
          style={{ top: '-30%', filter: 'brightness(50%)' }}
        />
      </div>
    </div>
  );
};

export default TitleCoverBackground;
