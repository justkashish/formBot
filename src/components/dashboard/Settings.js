import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('/api/users/settings', { name, email, oldPassword, newPassword }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Success handling
    } catch (err) {
      setError('Error updating settings');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Old Password" value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required />
      <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
      <button type="submit">Update Settings</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Settings;
