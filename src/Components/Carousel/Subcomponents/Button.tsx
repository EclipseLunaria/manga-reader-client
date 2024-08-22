import React from 'react';

const CarouselButton = (props: { direction: string; onClick?: () => void }) => {
  return (
    <div
      onClick={props.onClick}
      className={`carousel-button absolute w-16 z-20 h-16 bottom-0 
                   ${
                     props.direction === 'left'
                       ? 'bg-gradient-to-tr from-black to-transparent left-0'
                       : 'bg-gradient-to-tl from-black to-transparent right-0'
                   }
                   text-white cursor-pointer text-5xl rounded-xl py-auto`}
    >
      <div className="flex justify-center items-center h-full">
        {props.direction === 'left' ? '⮜' : '⮞'}
      </div>
    </div>
  );
};

export { CarouselButton };
