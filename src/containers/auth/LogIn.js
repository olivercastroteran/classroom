import React, { Component } from 'react';
import './auth.scss';

class LogIn extends Component {
  state = {};

  submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  changeHandler = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitHandler} autoComplete="off">
          <h5>Login</h5>
          <div className="input-field">
            <input
              type="email"
              id="email"
              autoComplete="off"
              onChange={this.changeHandler}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              autoComplete="off"
              type="password"
              id="password"
              onChange={this.changeHandler}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
