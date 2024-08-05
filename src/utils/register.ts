const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const response = await fetch('http://localhost:6700/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    return { error: 'An error occurred' };
  }
};

export default registerUser;
