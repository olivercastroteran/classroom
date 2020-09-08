import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './containers/dashboard/Dashboard';
import ClassDetails from './components/class/ClassDetails';
import LogIn from './containers/auth/LogIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/classes/:id" component={ClassDetails} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
