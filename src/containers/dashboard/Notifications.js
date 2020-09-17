import React from 'react';
import moment from 'moment';

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="notifications__container">
      <p className="notifications__container--title">Notifications</p>

      {notifications &&
        notifications.map((notification) => {
          return (
            <div key={notification.id} className="notification">
              <p>{notification.user}</p>
              <p>{notification.content}</p>
              <span>{moment(notification.time.toDate()).fromNow()}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Notifications;
