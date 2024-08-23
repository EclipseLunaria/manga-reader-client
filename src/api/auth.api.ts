import axios from 'axios';

const AUTH_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://auth.eclipselunaria.dev'
    : 'http://localhost:5000';

const refreshToken = async () => {
  try {
    const response = await axios.post(`${AUTH_BASE_URL}/auth/refresh`, {
      token: localStorage.getItem('refresh_token'),
    });

    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);

    return response.data.access_token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// add interceptor
authApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
    }

);

export { AUTH_BASE_URL, authApi, refreshToken };
