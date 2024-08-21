import axios from 'axios';
import {
  API_BASE_URL,
  AUTH_BASE_URL,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './api';

const login = async (username: string, password: string) => {
  const response = await fetch(`${AUTH_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  console.log(data);
  data.access_token && setAccessToken(data.access_token);
  data.refresh_token && setRefreshToken(data.refresh_token);
  console.log(getAccessToken());
  console.log(getRefreshToken());
  axios.defaults.headers.common.Authorization = `Bearer ${getAccessToken()}`;
  console.log(
    await axios.get(`${API_BASE_URL}/user`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` },
    }),
  );

  return data;
};

export default login;
