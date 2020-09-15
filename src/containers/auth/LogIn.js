import React, { Component } from 'react';
import './auth.scss';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
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
            <div className="error-msg">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (creds) => dispatch(login(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
