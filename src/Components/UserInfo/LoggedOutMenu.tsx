import React from 'react';
import UserMenuButton from './UserMenuButton';
import { LoginWindow, RegistrationWindow } from '../InternalWindow/WindowTypes';
const LoggedOutMenu = (props: {
  setActiveModal: (window: React.ReactNode | null) => void;
  onModalClose: () => void;
}) => {
  return (
    <div>
      <UserMenuButton
        link="/login"
        text="Sign In"
        onClick={() => {
          props.setActiveModal(<LoginWindow onClick={props.onModalClose} />);
          console.log('Register button clicked');
        }}
      />
      <UserMenuButton
        link="/register"
        text="Register"
        isCompliment
        onClick={() => {
          props.setActiveModal(
            <RegistrationWindow onClick={props.onModalClose} />,
          );
          console.log('Register button clicked');
        }}
      />
    </div>
  );
};

export default LoggedOutMenu;
