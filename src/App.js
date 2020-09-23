import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './containers/dashboard/Dashboard';
import ClassDetails from './components/class/ClassDetails';
import LogIn from './containers/auth/LogIn';
import SignUp from './containers/auth/SignUp';
import CreateClass from './containers/classes/CreateClass';
import User from './components/user/User';
import Library from './components/library/Library';
import SideDrawer from './components/layout/SideDrawer/SideDrawer';
import Backdrop from './components/layout/SideDrawer/Backdrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop clicked={backdropClickHandler} />;
  }

  return (
    <BrowserRouter>
      <div className="App" style={{ height: '100%' }}>
        <NavBar drawerClickHandler={drawerToggleClickHandler} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/library" component={Library} />
          <Route path="/classes/:id" component={ClassDetails} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateClass} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
