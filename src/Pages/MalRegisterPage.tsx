import React from 'react';
import { useLocation } from 'react-router-dom';
import MalRegistrationForm from '../Components/Forms/MalRegisterForm';
import { IMALRegistration } from '../utils/types';
import axios from 'axios';
import { AUTH_BASE_URL } from '../utils/api';

const MalRegisterPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const accessToken = query.get('access_token');
  const refreshToken = query.get('refresh_token');
  const mal_id = query.get('mal_id');
  const expires_in = parseInt(query.get('expires_in') || '0');
  console.log('Access Token:', accessToken);
  console.log('Refresh Token:', refreshToken);
  console.log('MyAnimeList ID:', mal_id);
  console.log('Expires In:', expires_in);
  const expires_at = new Date(Date.now() + expires_in * 1000);
  console.log('Expires At:', expires_at);

  const handleMalRegister = async (data: {
    username: string;
    email: string;
  }) => {
    const malRegistrationData: IMALRegistration = {
      username: data.username,
      email: data.email,
      access_token: accessToken || '',
      refresh_token: refreshToken || '',
      token_expires_at: expires_at,
      provider: 'myanimelist',
      provider_id: mal_id || '',
    };
    try {
      const response = await axios.post(
        AUTH_BASE_URL + '/signup/mal',
        malRegistrationData,
      );
      console.log(response.data);
    } catch (error) {
      console.error('Error registering with MyAnimeList:', error);
    }
  };

  return (
    <div>
      <MalRegistrationForm handleSubmit={handleMalRegister} />
    </div>
  );
};

export default MalRegisterPage;
