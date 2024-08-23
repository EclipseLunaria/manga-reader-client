import React from 'react';
import { IUserInfo } from '../../interfaces/bearer.interface';

const LoggedInUserMenu = (userInfo: IUserInfo) => {
  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div>{userInfo.username}</div>
    </div>
  );
};

export default LoggedInUserMenu;
