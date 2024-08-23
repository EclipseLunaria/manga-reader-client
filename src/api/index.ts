import { AUTH_BASE_URL, authApi } from './auth.api';
console.log('Environment:', process.env.NODE_ENV);

const API_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://manga.eclipselunaria.dev/api'
    : 'http://localhost:6900';

export { API_BASE_URL, AUTH_BASE_URL };
