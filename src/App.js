import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Routes>
<Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
