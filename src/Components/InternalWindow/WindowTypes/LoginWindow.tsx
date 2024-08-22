import React from 'react';
import InternalWindow from '../InternalWindow';
import { LoginForm } from '../../Forms';
const LoginWindow = (props: { onClick: () => void }) => {
  return (
    <InternalWindow
      title="Login"
      dimensions={{ width: '500px', height: '600px' }}
      onClose={props.onClick}
      initialPosition={{ top: 100, left: 400 }}
    >
      <LoginForm closeWindow={props.onClick} />
    </InternalWindow>
  );
};

export default LoginWindow;
