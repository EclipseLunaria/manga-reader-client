// Log the current environment
console.log('Environment:', process.env.NODE_ENV);

// Define the base URLs for different environments
const config = {
  production: 'https://manga.eclipselunaria.dev/api',
  development: 'http://localhost:6900',
  // Optionally, add more environments like staging, testing, etc.
};

// Select the API base URL based on the current environment
const API_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://manga.eclipselunaria.dev/api'
    : 'http://localhost:6900';

const AUTH_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://auth.eclipselunaria.dev'
    : 'http://:5000';
// Export the API base URL for use in other modules

const setAccessToken = (token: string) => {
  localStorage.setItem('accessToken', token);
};

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const setRefreshToken = (token: string) => {
  localStorage.setItem('refreshToken', token);
};

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

export {
  API_BASE_URL,
  AUTH_BASE_URL,
  getAccessToken,
  setAccessToken,
  getRefreshToken,
  setRefreshToken,
};
