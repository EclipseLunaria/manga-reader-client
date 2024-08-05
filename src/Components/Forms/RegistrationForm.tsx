import React, { useState } from 'react';
import { FormButton, TextInput } from './FormComponents';
import axios from 'axios';

interface IRegistrationFormData {
  email: string;
  username: string;
  password: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<IRegistrationFormData>({
    email: '',
    username: '',
    password: '',
  });
  const handleFieldChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [type]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = () => {
    axios.post('http://localhost:6700/register', formData);
    console.log('Form Submitted');
  };
  return (
    <div className="w-full">
      <h1 className="flex justify-center">Registration Form</h1>
      <form className="flex flex-col justify-center">
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
