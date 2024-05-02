import React, { useState } from 'react';
import { ProfileFormData } from './ProfileFormData';

interface Props {
  user: ProfileFormData;
  onSave: (data: ProfileFormData) => void;
  onClose: () => void;
}

const ProfileEditModal: React.FC<Props> = ({ user, onSave, onClose }) => {
  const [formData, setFormData] = useState<ProfileFormData>(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
      <h2>Edit Profile</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" readOnly />  // Email is typically not editable
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
      <input type="text" name="personality" value={formData.personality} onChange={handleChange} placeholder="Personality" />
      <input type="text" name="passion" value={formData.passion} onChange={handleChange} placeholder="Passion" />
      <input type="text" name="groupRelationship" value={formData.groupRelationship} onChange={handleChange} placeholder="Group Relationship" />
      <input type="text" name="groupDuration" value={formData.groupDuration} onChange={handleChange} placeholder="Group Duration" />
      <input type="text" name="hangoutSetting" value={formData.hangoutSetting} onChange={handleChange} placeholder="Hangout Setting" />
      <textarea name="memorableExperience" value={formData.memorableExperience} onChange={handleChange} placeholder="Memorable Experience" />
      <textarea name="insideJokes" value={formData.insideJokes} onChange={handleChange} placeholder="Inside Jokes" />
      <textarea name="offLimitsTopics" value={formData.offLimitsTopics} onChange={handleChange} placeholder="Off Limits Topics" />
      <textarea name="trustLevel" value={formData.trustLevel} onChange={handleChange} placeholder="Trust Level" />
      <button onClick={() => onSave(formData)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default ProfileEditModal;
