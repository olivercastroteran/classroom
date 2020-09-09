import React, { Component } from 'react';
import './auth.scss';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.submitHandler} autoComplete="off">
          <h5>Login</h5>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              id="email"
              autoComplete="off"
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              autoComplete="off"
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.changeHandler}
              required
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
