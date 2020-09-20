import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Library = (props) => {
  const { auth, isProfessor } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className="library">
      <h2>Library</h2>
      {isProfessor ? 'Upload' : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    isProfessor: state.firebase.profile.isProfessor,
  };
};

export default connect(mapStateToProps)(Library);
