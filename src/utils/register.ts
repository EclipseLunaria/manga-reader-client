import { AUTH_BASE_URL } from './api';

const registerUser = async (
  name: string,
  username: string,
  email: string,
  password: string,
) => {
  try {
    const response = await fetch(`${AUTH_BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password, name }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
};

export default registerUser;
