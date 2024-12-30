import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CreateForm from './CreateForm';

const Workspace = () => {
  const { workspaceId } = useParams();
  const [workspace, setWorkspace] = useState(null);

  useEffect(() => {
    const fetchWorkspace = async () => {
      try {
        const response = await axios.get(`/api/workspaces/${workspaceId}`);
        setWorkspace(response.data);
      } catch (err) {
        console.error('Error fetching workspace:', err);
      }
    };
    fetchWorkspace();
  }, [workspaceId]);

  return (
    <div>
      {workspace ? (
        <>
          <h2>{workspace.name}</h2>
          <CreateForm workspaceId={workspaceId} />
          {/* Other workspace details, forms, etc. */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Workspace;
