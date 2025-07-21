import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to Bad Counselor</h1>
      <p>Your online therapy card game experience starts here.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/signup" style={{ marginRight: '20px' }}>
          <button>Sign Up</button>
        </Link>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
