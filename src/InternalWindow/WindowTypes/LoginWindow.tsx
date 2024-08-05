import React from 'react';
import InternalWindow from '../InternalWindow';
import { LoginForm } from '../../Components/Forms';
const RegistrationWindow = (props: { onClick: () => void }) => {
  return (
    <InternalWindow
      title="Registration"
      dimensions={{ width: '500px', height: '600px' }}
      onClose={props.onClick}
    >
      <LoginForm />
    </InternalWindow>
  );
};

export default RegistrationWindow;
