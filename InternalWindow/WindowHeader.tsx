import React from "react";  

const InternalWindowHeader = (props: { title?: string }) => {
    return (
      <div className="missing-win-header bg-gradient-to-b from-cyan-300 to-cyan-500 h-12 w-full border-b-2 border-cyan-500 flex">
        <div className="my-auto text-4xl pl-4">{props.title}</div>
        <div
          onClick={() => {}}
          className="close-btn ml-auto h-8 w-8 my-auto mr-4 flex justify-center border-white border-2 rounded-md text-xl text-white cursor-pointer hover:bg-red-500 bg-red-600 transition-colors"
        >
          X
        </div>
      </div>
    );
  };

export default InternalWindowHeader;