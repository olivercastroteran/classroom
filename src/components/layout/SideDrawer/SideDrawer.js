import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import './SideDrawer.scss';

const SideDrawer = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return <nav className={drawerClasses}>{links}</nav>;
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(SideDrawer);
