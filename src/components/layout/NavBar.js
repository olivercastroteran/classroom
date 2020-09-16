import React from 'react';
import './NavBar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClassroomLogo from '../../assets/images/classroom-logo.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = (props) => {
  const { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="logo">
          <img src={ClassroomLogo} alt="classroom logo" />
        </Link>
        <div className="links">{links}</div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavBar);
