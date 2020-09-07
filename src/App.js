import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './containers/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
