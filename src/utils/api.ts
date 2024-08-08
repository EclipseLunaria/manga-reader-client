// Load environment variables from .env file if in development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

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
  config[process.env.NODE_ENV as keyof typeof config] || config.development;

// Export the API base URL for use in other modules
export { API_BASE_URL };
