import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">
          Classes
        </NavLink>
      </li>
      <li>
        <Link to="/login" onClick={props.logout}>
          Logout
        </Link>
      </li>
      <li>
        <NavLink to="/user" className="thumbnail">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
