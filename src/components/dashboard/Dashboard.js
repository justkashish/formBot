import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await axios.get('/api/workspaces');
        setWorkspaces(response.data);
      } catch (err) {
        console.error('Error fetching workspaces:', err);
      }
    };
    fetchWorkspaces();
  }, []);

  return (
    <div>
      <h2>Your Workspaces</h2>
      {workspaces.length === 0 ? (
        <p>No workspaces found</p>
      ) : (
        <ul>
          {workspaces.map((workspace) => (
            <li key={workspace._id}>
              <a href={`/workspace/${workspace._id}`}>{workspace.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
