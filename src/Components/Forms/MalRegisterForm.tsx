import React, { useEffect, useState } from 'react';
import { FormButton, TextInput, ErrorMessageBox } from './FormComponents';
interface IMALRegistrationFormData {
  username: string;
  email: string;
}

const MalRegistrationForm = (props: {
  handleSubmit: (data: IMALRegistrationFormData) => void;
}) => {
  const [formData, setFormData] = useState<IMALRegistrationFormData>({
    email: '',
    username: '',
  });

  const [error, setError] = useState<string>('');

  const handleFieldChange = (
    type: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({ ...formData, [type]: e.target.value });
    console.log(formData);
  };

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  const handleClick = async () => {
    props.handleSubmit(formData);
  };

  return (
    <div className="w-full">
      <h1 className="flex justify-center">Registration Form</h1>
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
          type="email"
          value={formData.email}
          onChange={handleFieldChange}
          placeholder="Email"
          icon="envelope"
        />

        <FormButton
          text="Complete Registration"
          type="submit"
          onClick={handleClick}
        />
      </form>
    </div>
  );
};

export default MalRegistrationForm;
