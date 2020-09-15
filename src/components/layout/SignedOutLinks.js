import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="signedOut">
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
