const env =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';
console.log('env:', process.env.NODE_ENV);
const API_BASE_URL =
  env === 'production'
    ? 'https://manga.eclipselunaria.dev/api'
    : 'http://localhost:6900';

export { API_BASE_URL };
