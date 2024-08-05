import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  return (
    <div className="menu absolute w-[300px] h-[500px] bg-primary rounded-lg right-0 mt-2 p-4 z-20">
      <div className="user-menu-item flex flex-col">Profile</div>
      <UserMenuButton link="/login" text="Sign In" />
      <UserMenuButton link="/register" text="Register" isCompliment />
    </div>
  );
};

export default UserMenu;

const UserMenuButton = (props: {
  text: string;
  link: string;
  isCompliment?: boolean;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-secondary w-full flex flex-row justify-center rounded-md text-xl cursor-pointer m-4 py-2 ${
        props.isCompliment
          ? 'bg-secondary hover:bg-secondary-700'
          : 'bg-orange-600 hover:bg-orange-700'
      }`}
      onClick={() => navigate(props.link)}
    >
      {props.text}
    </div>
  );
};
