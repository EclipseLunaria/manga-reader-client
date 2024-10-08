import React, { useEffect, useState } from 'react';
import { FormButton, TextInput, ErrorMessageBox } from './subcomponents';
import registerUser from '../../utils/register';
interface IRegistrationFormData {
  username: string;
  name: string;
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<IRegistrationFormData>({
    name: '',
    email: '',
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
    const registerResponse = await registerUser(
      formData.name,
      formData.username,
      formData.email,
      formData.password,
    );
    console.log(registerResponse);
    if (registerResponse.error) {
      setError(registerResponse.error);
    } else {
      console.log('User registered successfully');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);
  return (
    <div className="w-full">
      <h1 className="flex justify-center">Registration Form</h1>
      <form className="flex flex-col justify-center">
        {error && (
          <ErrorMessageBox message={error} onClose={() => setError('')} />
        )}
        <TextInput
          type="name"
          value={formData.name}
          onChange={handleFieldChange}
          placeholder="Name"
          icon="user"
        />
        <TextInput
          type="email"
          value={formData.email}
          onChange={handleFieldChange}
          placeholder="Email"
          icon="envelope"
        />
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
        <FormButton text="Register" type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default RegistrationForm;
