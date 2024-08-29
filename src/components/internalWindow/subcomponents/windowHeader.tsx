import React from 'react';

const WindowHeader = (props: {
  title?: string;
  onClick: () => void;
  onMouseDown: (e: any) => void;
}) => {
  return (
    <div
      className="missing-win-header bg-gradient-to-b from-green-500 to-green-800 h-12 w-full border-b-2 border-green-700 flex"
      onMouseDown={(e) => {
        props.onMouseDown(e);
      }}
    >
      <div className="my-auto text-4xl pl-4">{props.title}</div>
      <div
        onClick={() => {
          props.onClick();
          console.log('clicked');
        }}
        className="close-btn ml-auto h-8 w-8 my-auto mr-4 flex justify-center border-white border-2 rounded-md text-xl text-white cursor-pointer hover:bg-red-500 bg-red-600 transition-colors"
      >
        X
      </div>
    </div>
  );
};

export default WindowHeader;
