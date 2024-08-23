import axios from 'axios';
import { API_BASE_URL, AUTH_BASE_URL } from './api';

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

  return data;
};

export default login;
