import React from 'react';
import './SideDrawer.scss';

const Backdrop = (props) => {
  return <div className="backdrop-menu" onClick={props.clicked}></div>;
};

export default Backdrop;
