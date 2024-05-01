import React, { useState } from 'react';

export interface ProfileFormData {
  name: string;
  email: string;
  age: string;
  location: string;
  job: string;
}

interface Props {
  onSave: (data: ProfileFormData) => void;
}

const ProfileForm: React.FC<Props> = ({ onSave }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    email: '',
    age: '',
    location: '',
    job: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Job" />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
