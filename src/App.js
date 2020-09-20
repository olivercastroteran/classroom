import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
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
