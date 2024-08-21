import React from 'react';
import InternalWindow from '../InternalWindow';
import { RegistrationForm } from '../../Components/Forms';
import { OAuthProvider } from '../../utils/types';
import { getOAuthLogo, getOAuthUrl } from '../../utils/oauth.utils';
import { NavigateOptions, useNavigate } from 'react-router-dom';
const RegistrationWindow = (props: { onClick: () => void }) => {
  return (
    <InternalWindow
      title="Registration"
      dimensions={{ width: '500px', height: '600px' }}
      onClose={props.onClick}
      initialPosition={{ top: 400, left: 400 }}
    >
      <div className="flex flex-col w-full">
        <OAuthSignUpGroup />
        <RegistrationForm />
      </div>
    </InternalWindow>
  );
};

export default RegistrationWindow;

const OAuthSignUpGroup = () => {
  return (
    <div className="oauth-register flex flex-col justify-center w-full align-middle mb-8">
      <div className="flex justify-center my-4">
        <div className="text-2xl">Sign Up with</div>
      </div>
      <div className="oauth-button-group flex justify-center w-full mb-4">
        <OAuthButton provider="mal" />
        <OAuthButton provider="google" />
        <OAuthButton provider="facebook" />
      </div>
      <div className="flex justify-center relative">
        <div className="border-b-2 border-primary w-4/5 absolute"></div>
        <div className="text-lg absolute -top-3 bg-secondary px-4">Or</div>
      </div>
    </div>
  );
};

const OAuthButton = (props: { provider: OAuthProvider }) => {
  return (
    <img
      src={getOAuthLogo(props.provider)}
      onClick={() => {
        console.log('OAuth Sign Up using: ', props.provider);
        handleOauthSignUp(props.provider);
      }}
      alt={props.provider}
      className="h-14 w-14 object-contain m-2 rounded-lg cursor-pointer border-2 transition-all hover:shadow-green-700 hover:shadow-lg hover:border-green-500"
    />
  );
};

const handleOauthSignUp = (provider: OAuthProvider) => {
  const oauthWindow = window.open(
    getOAuthUrl(provider),
    'oauthWindow',
    'width=800,height=600',
  );

  const handleMessage = (
    event: MessageEvent<{ access_token: string; refresh_token: string }>,
  ) => {
    const navigate = useNavigate();
  
    console.log(event.data);
    const { access_token, refresh_token } = event.data;
    console.log(event.data);
    if (access_token && refresh_token) {
      console.log('OAuth Sign Up using: ', provider);

      navigate(
        `/register/mal?access_token=${access_token}&refresh_token=${refresh_token}`,
      );
    }

    oauthWindow && oauthWindow.close();
    window.removeEventListener('message', handleMessage);
  };

  console.log('OAuth Sign Up using: ', provider);
};
