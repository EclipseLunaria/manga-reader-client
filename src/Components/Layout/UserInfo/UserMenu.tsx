import React, { ReactNode, useEffect, useState } from 'react';
import {
  LoginWindow,
  RegistrationWindow,
} from '../../../InternalWindow/WindowTypes';
import UserMenuButton from './UserMenuButton';

const UserMenu = (props: { closeMenu: () => void }) => {
  const [activeModal, setActiveModal] = useState<null | ReactNode>(null);

  const onModalClose = () => {
    setActiveModal(null);
    props.closeMenu();
  };
  useEffect(() => {}, [activeModal]);
  return (
    <div className="menu absolute w-[300px] h-[500px] bg-primary rounded-lg right-0 mt-2 p-4 z-20">
      <UserMenuButton
        link="/login"
        text="Sign In"
        onClick={() => {
          setActiveModal(<LoginWindow onClick={onModalClose} />);
          console.log('Register button clicked');
        }}
      />
      <UserMenuButton
        link="/register"
        text="Register"
        isCompliment
        onClick={() => {
          setActiveModal(<RegistrationWindow onClick={onModalClose} />);
          console.log('Register button clicked');
        }}
      />
      {activeModal}
    </div>
  );
};

export default UserMenu;
