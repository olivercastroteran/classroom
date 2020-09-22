import React from 'react';
import './Library.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UploadForm from './UploadForm';
import DocsGrid from './DocsGrid';

const Library = (props) => {
  const { auth, isProfessor } = props;
  if (!auth.uid) return <Redirect to="/login" />;
  return (
    <div className="library">
      <h2>Classroom Central Library</h2>
      {isProfessor ? (
        <p>Welcome professor, you can upload as many PDF's as you want</p>
      ) : (
        <p>Welcome student download as many books as you need</p>
      )}
      {isProfessor ? <UploadForm /> : null}
      <DocsGrid />
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
