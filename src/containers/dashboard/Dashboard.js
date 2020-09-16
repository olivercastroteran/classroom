import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import Notifications from './Notifications';
import ClassesList from '../classes/ClassesList';
import AddBtn from '../../assets/icons/plus-icon.svg';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { classes, auth, isProfessor } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="dashboard">
        <div className="classes-list">
          <ClassesList classes={classes} />
        </div>
        <div className="notifications">
          <Notifications />
        </div>
        {isProfessor ? (
          <Link to="/create" className="add-btn">
            <img className="add-icon" src={AddBtn} alt="add class btn" />
          </Link>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    classes: state.firestore.ordered.classes,
    auth: state.firebase.auth,
    isProfessor: state.firebase.profile.isProfessor,
  };
};

export default compose(
  firestoreConnect(['classes']),
  connect(mapStateToProps)
)(Dashboard);
