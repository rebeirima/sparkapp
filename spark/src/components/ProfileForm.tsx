import React, { useState } from 'react';
import { ProfileFormData } from './ProfileFormData'; // Ensure this is the correct path

interface Props {
  onSave: (data: ProfileFormData) => void;
}

interface Props {
  onSave: (data: ProfileFormData) => void;
  initialData?: ProfileFormData; // Make sure it's optional if it might not always be passed
}
const ProfileForm: React.FC<Props> = ({ onSave }) => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: '',
    email: '',
    age: '',
    occupation: '',
    personality: '',
    passion: '',
    groupRelationship: '',
    groupDuration: '',
    hangoutSetting: '',
    memorableExperience: '',
    insideJokes: '',
    offLimitsTopics: '',
    trustLevel: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for each piece of data */}
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" readOnly />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
      <input type="text" name="personality" value={formData.personality} onChange={handleChange} placeholder="Personality in three words" />
      <textarea name="passion" value={formData.passion} onChange={handleChange} placeholder="What's something you're passionate about?" />
      <textarea name="groupRelationship" value={formData.groupRelationship} onChange={handleChange} placeholder="How do you know the other players?" />
      <input type="text" name="groupDuration" value={formData.groupDuration} onChange={handleChange} placeholder="How long have you known each other?" />
      <input type="text" name="hangoutSetting" value={formData.hangoutSetting} onChange={handleChange} placeholder="Typical setting for hangouts" />
      <textarea name="memorableExperience" value={formData.memorableExperience} onChange={handleChange} placeholder="A memorable experience with the group" />
      <textarea name="insideJokes" value={formData.insideJokes} onChange={handleChange} placeholder="Any inside jokes?" />
      <textarea name="offLimitsTopics" value={formData.offLimitsTopics} onChange={handleChange} placeholder="Any off-limits topics?" />
      <textarea name="trustLevel" value={formData.trustLevel} onChange={handleChange} placeholder="Level of trust and support in the group" />
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
