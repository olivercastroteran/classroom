import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
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
