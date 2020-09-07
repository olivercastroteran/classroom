import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';
import Notifications from './Notifications';
import ClassesList from '../classes/ClassesList';
import AddBtn from '../../assets/icons/plus-icon.svg';

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dashboard">
        <div className="classes-list">
          <ClassesList />
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

export default Dashboard;
