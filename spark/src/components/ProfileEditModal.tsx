import React, { useState } from 'react';

interface ProfileFormData {
  name: string;
  email: string;
  age: string;
  location: string;
  job: string;
}

interface Props {
  user: ProfileFormData;
  onSave: (data: ProfileFormData) => void;
  onClose: () => void;
}

const ProfileEditModal: React.FC<Props> = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState<ProfileFormData>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
      <h2>Edit Profile</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
      <input type="text" name="job" value={formData.job} onChange={handleChange} placeholder="Job" />
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default ProfileEditModal;
