import React from 'react';

const Notifications = () => {
  return (
    <div className="notifications__container">
      <p className="notifications__container--title">Notifications</p>

      <div className="notification">
        <p>Oliver Castro T</p>
        <p>Created a New Class</p>
        <span>2 days ago</span>
      </div>

      <div className="notification">
        <p>Oliver Castro T</p>
        <p>Created a New Class</p>
        <span>2 days ago</span>
      </div>

      <div className="notification">
        <p>Oliver Castro T</p>
        <p>Created a New Class</p>
        <span>2 days ago</span>
      </div>
    </div>
  );
};

export default Notifications;
