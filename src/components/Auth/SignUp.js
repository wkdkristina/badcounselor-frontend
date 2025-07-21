import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase'; // adjust path if needed
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [screenName, setScreenName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: screenName,
    });

    console.log('User created:', user);
    navigate('/dashboard'); // You can change the route later
  } catch (err) {
    console.error('Error signing up:', err);
    setError(err.message);
  }
};


  return (
    <div>
      <h1>Bad Counselor - Sign Up</h1>
      <h2>Create your account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Screen Name"
          value={screenName}
          onChange={(e) => setScreenName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
  Already have an account? <Link to="/signin">Sign In</Link>
</p>

    </div>
  );
}

export default SignUp;
