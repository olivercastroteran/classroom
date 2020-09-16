import React from 'react';
import './User.scss';
import { connect } from 'react-redux';
import { ReactComponent as ProfessorImg } from '../../assets/images/einstein.svg';
import { ReactComponent as StudentImg } from '../../assets/images/student.svg';

const User = (props) => {
  const { isProfessor, firstName, lastName, email } = props.profile;

  return (
    <div className="user">
      <div className="user__img">
        {isProfessor ? <ProfessorImg /> : <StudentImg />}
      </div>
      <div className="user__data">
        <p>
          Name: <span>{`${firstName} ${lastName}`}</span>
        </p>
        <p>
          Status: <span>{isProfessor ? 'Professor' : 'Student'}</span>
        </p>
        <p>
          Email: <span>{email}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(User);
