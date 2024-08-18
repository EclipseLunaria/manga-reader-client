import React from 'react';
import InternalWindow from '../InternalWindow';
import { RegistrationForm } from '../../Components/Forms';
const RegistrationWindow = (props: { onClick: () => void }) => {
  return (
    <InternalWindow
      title="Registration"
      dimensions={{ width: '500px', height: '600px' }}
      onClose={props.onClick}
      initialPosition={{ top: 400, left: 400 }}
    >
      <RegistrationForm />
    </InternalWindow>
  );
};

export default RegistrationWindow;
