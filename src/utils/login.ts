import { authApi } from '../api/auth.api';
import IBearerBody from '../interfaces/bearer.interface';

const login = async (username: string, password: string) => {
  const response = await authApi.post(
    `/auth/login`,
    JSON.stringify({ username, password }),
  );

  const data: IBearerBody = JSON.parse(response.data);
  localStorage.setItem('access_token', data.access_token);
  localStorage.setItem('refresh_token', data.refresh_token);
  localStorage.setItem('user', JSON.stringify(data.user));
  console.log(data);
  authApi.defaults.headers['Authorization'] = `Bearer ${data.access_token}`;
  return JSON.parse(response.data);
};

export default login;
