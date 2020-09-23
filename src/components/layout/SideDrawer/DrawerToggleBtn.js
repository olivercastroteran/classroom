import React from 'react';
import './SideDrawer.scss';

const DrawerToggleBtn = (props) => {
  return (
    <button className="toggle-btn" onClick={props.clicked}>
      <div className="toggle-btn__line"></div>
      <div className="toggle-btn__line"></div>
      <div className="toggle-btn__line"></div>
    </button>
  );
};

export default DrawerToggleBtn;
