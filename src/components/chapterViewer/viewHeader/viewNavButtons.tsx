import React from 'react';

const ViewNavButton = (props: {
  text: string;
  disableHighlight?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={props.onClick}
      className={`chapter-nav-button m-2 p-1 text-2xl
                   rounded-md bg-secondary select-none
                   w-full bold flex justify-center 
                   transition-colors cursor-pointer
                   ${
                     props.disableHighlight
                       ? 'cursor-default'
                       : 'hover:bg-green-700'
                   }
                   ${
                     props.disabled
                       ? 'cursor-default hover:bg-secondary opacity-40'
                       : ''
                   }`}
    >
      {props.text}
    </div>
  );
};

export default ViewNavButton;
