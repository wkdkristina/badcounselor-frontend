// src/components/Auth/SignIn.js

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      navigate('/dashboard'); // or another route
    } catch (err) {
      console.error('Sign-in error:', err);
      setError('Invalid email or password.');
    }
  };

  return (
    <div>
      <h1>Bad Counselor - Sign In</h1>
      <h2>Welcome back! Please log in.</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
