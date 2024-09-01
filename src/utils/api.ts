import axios from 'axios';

// Log the current environment
console.log('Environment:', process.env.NODE_ENV);

// Select the API base URL based on the current environment
const API_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://api.mangaflux.net'
    : 'http://localhost:6900';

const AUTH_BASE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === 'production'
    ? 'https://auth.eclipselunaria.dev'
    : 'http://localhost:5000';
// Export the API base URL for use in other modules

export { API_BASE_URL, AUTH_BASE_URL };
