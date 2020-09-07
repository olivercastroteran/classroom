import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import ClassroomLogo from '../../assets/images/classroom-logo.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="logo">
          <img src={ClassroomLogo} alt="classroom logo" />
        </Link>
        <div className="links">
          <SignedOutLinks />
          <SignedInLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;