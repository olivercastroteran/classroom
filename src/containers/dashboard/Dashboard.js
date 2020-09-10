import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import Notifications from './Notifications';
import ClassesList from '../classes/ClassesList';
import AddBtn from '../../assets/icons/plus-icon.svg';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  state = {};
  render() {
    //console.log(this.props);
    const { classes } = this.props;
    return (
      <div className="dashboard">
        <div className="classes-list">
          <ClassesList classes={classes} />
        </div>
        <div className="notifications">
          <Notifications />
        </div>
        <Link to="/create" className="add-btn">
          <img className="add-icon" src={AddBtn} alt="add class btn" />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    classes: state.firestore.ordered.classes,
  };
};

export default compose(
  firestoreConnect(() => ['classes']),
  connect(mapStateToProps)
)(Dashboard);
