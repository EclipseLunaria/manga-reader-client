import React from 'react';

const CarouselButton = (props: { direction: string; onClick?: () => void }) => {
  const buttonStyle = props.direction === 'left' ? 'left-2' : 'right-1';

  return (
    <div
      onClick={props.onClick}
      className={`carousel-button absolute top-1/3 bg-opacity-30 z-20 bg-black text-white
                  p-4 cursor-pointer text-5xl ${buttonStyle} rounded-2xl`}
    >
      {props.direction === 'left' ? '⮜' : '⮞'}
    </div>
  );
};

export { CarouselButton };
