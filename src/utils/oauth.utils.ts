import { OAuthProvider } from './types';
import MALButton from '../assets/oauth/mal-button.png';
import FacebookButton from '../assets/oauth/facebook-button.png';
import GoogleButton from '../assets/oauth/google-button.png';
import { AUTH_BASE_URL } from './api';

const MAL_CLIENT_ID = '63b748431010db6dfc650721156b682d';

const getOAuthUrl = (provider: OAuthProvider) => {
  switch (provider) {
    case 'mal':
      return `${AUTH_BASE_URL}/auth/mal/authorize`;
    case 'google':
      return 'https://accounts.google.com/o/oauth2/v2/auth';
    case 'facebook':
      return 'https://www.facebook.com/v12.0/dialog/oauth';
  }
};

const getOAuthLogo = (provider: OAuthProvider) => {
  switch (provider) {
    case 'mal':
      return MALButton;
    case 'google':
      return GoogleButton;
    case 'facebook':
      return FacebookButton;
  }
};

export { getOAuthUrl, getOAuthLogo };
