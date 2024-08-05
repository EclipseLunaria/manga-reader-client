import React from 'react';
const UserIcon = (props: { onClick: () => void }) => {
  return (
    <div
      className="bg-secondary rounded-full h-12 w-12 flex flex-col items-center justify-center cursor-pointer"
      onClick={props.onClick}
    ></div>
  );
};

export default UserIcon;
