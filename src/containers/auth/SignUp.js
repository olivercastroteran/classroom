import React, { Component } from 'react';
import './auth.scss';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
          <h5>Sign Up</h5>
          <div className="input-field">
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              autoComplete="off"
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              autoComplete="off"
              onChange={this.changeHandler}
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
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
            <button className="btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
