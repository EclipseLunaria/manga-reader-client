import React from 'react';
import UserMenuButton from './userMenuButton';
import { LoginWindow, RegistrationWindow } from '../internalWindow';

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
