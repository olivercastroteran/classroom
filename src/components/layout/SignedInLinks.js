import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Classes
        </NavLink>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
      <li>
        <NavLink to="/user" className="thumbnail">
          OC
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
