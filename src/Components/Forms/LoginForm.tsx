import React, { useState, useEffect } from 'react';
import { FormButton, TextInput, ErrorMessageBox } from './FormComponents';
import login from '../../utils/login';

interface ILoginFormData {
  username: string;
  password: string;
}

const LoginForm = (props: { closeWindow: () => void }) => {
  const [formData, setFormData] = useState<ILoginFormData>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string>('');

  const handleFieldChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [type]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async () => {
    const loginResponse = await login(formData.username, formData.password);
    if (loginResponse.error) {
      setError(loginResponse.error);
    } else {
      console.log('User logged in successfully');
      console.log(loginResponse);
      

      props.closeWindow();
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(timer); // Cleanup the timer on component unmount or error change
    }
  }, [error]);

  return (
    <div className="w-full">
      <h1 className="flex justify-center">Login Form</h1>
      <form className="flex flex-col justify-center">
        {error && (
          <ErrorMessageBox message={error} onClose={() => setError('')} />
        )}
        <TextInput
          type="username"
          value={formData.username}
          onChange={handleFieldChange}
          placeholder="Username"
          icon="user"
        />
        <TextInput
          type="password"
          value={formData.password}
          onChange={handleFieldChange}
          placeholder="Password"
          icon="lock"
        />
        <FormButton text="Login" type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default LoginForm;
