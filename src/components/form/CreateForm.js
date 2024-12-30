import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = ({ workspaceId }) => {
  const [formName, setFormName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/forms`, { name: formName, workspaceId });
      // Redirect to the created form or workspace
    } catch (err) {
      setError('Error creating form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Form Name" value={formName} onChange={(e) => setFormName(e.target.value)} required />
      <button type="submit">Create Form</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default CreateForm;
