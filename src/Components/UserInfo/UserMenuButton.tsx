import React from 'react';

const UserMenuButton = (props: {
  text: string;
  link: string;
  isCompliment?: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`bg-secondary w-full flex flex-row justify-center rounded-md text-xl cursor-pointer m-4 py-2 mx-auto hover:shadow-green-800 hover:shadow-md transition-shadow ${
        props.isCompliment
          ? 'bg-secondary hover:bg-secondary-700'
          : 'bg-orange-600 hover:bg-orange-700'
      }`}
      onClick={() => props.onClick()}
    >
      {props.text}
    </div>
  );
};

export default UserMenuButton;
