import React from 'react';
import MikuProfile from '../../../assets/MikuProfile.jpg';
const UserIcon = (props: { onClick: () => void }) => {
  return (
    <img
      className="bg-secondary rounded-full h-12 w-12 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
      onClick={props.onClick}
      src={MikuProfile}
    />
  );
};

export default UserIcon;
