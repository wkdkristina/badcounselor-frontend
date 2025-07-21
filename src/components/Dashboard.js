import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {currentUser?.displayName || currentUser?.email}!</p>
    </div>
  );
};

export default Dashboard;
