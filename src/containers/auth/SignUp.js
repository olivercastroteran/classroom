import React, { useState } from 'react';
import './auth.scss';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isProfessor, setIsProfessor] = useState(false);
  const [isStudent, setIsStudent] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
      code,
      firstName,
      lastName,
      isProfessor,
      isStudent,
    };

    console.log(user);
  };

  const checkValidation = () => {
    if (isStudent) {
      setFormIsValid(true);
    }
    if (isProfessor) {
      if (code === 'xZ6f24K') {
        setFormIsValid(true);
      }
    }
  };

  return (
    <div className="form-container">
      <form
        onSubmit={submitHandler}
        autoComplete="off"
        onKeyPress={(event) => {
          if (event.which === 13) {
            event.preventDefault();
          }
        }}
      >
        <h5>Sign Up</h5>

        <div className="user">
          <button
            type="button"
            className={`left-btn ${isStudent ? 'active' : ''}`}
            onClick={(e) => {
              setIsProfessor(false);
              setIsStudent(!isStudent);
            }}
          >
            Student
          </button>
          <button
            type="button"
            className={`right-btn ${isProfessor ? 'active' : ''}`}
            onClick={(e) => {
              setIsStudent(false);
              setIsProfessor(!isProfessor);
            }}
          >
            Professor
          </button>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            autoComplete="off"
            onChange={(e) => {
              setFirstName(e.target.value);
              checkValidation();
            }}
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
            onChange={(e) => {
              setLastName(e.target.value);
              checkValidation();
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
              checkValidation();
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
              checkValidation();
            }}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {isProfessor ? (
          <div className="input-field">
            <input
              autoComplete="off"
              type="password"
              placeholder="Professor Code (xZ6f24KO)"
              id="code"
              onChange={(e) => {
                checkValidation();
                setCode(e.target.value);
              }}
              required
            />
            <label htmlFor="password">Professor Code (xZ6f24KO)</label>
          </div>
        ) : null}

        <div className="input-field">
          <button className="btn" disabled={!formIsValid}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
