import React, { ReactNode, useEffect, useState } from 'react';
import { IUserInfo } from '../../interfaces/bearer.interface';
import LoggedInUserMenu from './LoggedInUserMenu';
import LoggedOutMenu from './LoggedOutMenu';

const UserMenu = (props: { closeMenu: () => void }) => {
  const [activeModal, setActiveModal] = useState<null | ReactNode>(null);
  const userInfo: IUserInfo =
    JSON.parse(localStorage.getItem('user') || '') ?? null;

  const onModalClose = () => {
    setActiveModal(null);
    props.closeMenu();
  };
  useEffect(() => {}, [activeModal]);
  return (
    <div className="menu absolute w-[300px] h-[500px] bg-primary rounded-lg right-0 mt-2 p-4 z-20">
      {userInfo
        ? LoggedInUserMenu(userInfo)
        : LoggedOutMenu({ setActiveModal, onModalClose })}
      {activeModal}
    </div>
  );
};

export default UserMenu;
