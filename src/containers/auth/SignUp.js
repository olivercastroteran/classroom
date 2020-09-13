import React, { useState, useEffect, useCallback } from 'react';
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

  const checkValidation = useCallback(() => {
    if (isStudent && firstName && lastName && email && password.length > 5) {
      setFormIsValid(true);
    } else if (
      isProfessor &&
      firstName &&
      lastName &&
      email &&
      password.length > 5 &&
      code === 'xZ6f24K'
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [firstName, lastName, email, password, code, isProfessor, isStudent]);

  useEffect(() => {
    checkValidation();
  }, [checkValidation]);

  return (
    <div className="form-container">
      <form
        className="signup"
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
              setFormIsValid(false);
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
              setFormIsValid(false);
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
              checkValidation();
              setFirstName(e.target.value);
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
              checkValidation();
              setLastName(e.target.value);
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
              checkValidation();
              setEmail(e.target.value);
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
              checkValidation();
              setPassword(e.target.value);
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
              placeholder="Professor Code (xZ6f24K)"
              id="code"
              onChange={(e) => {
                checkValidation();
                setCode(e.target.value);
              }}
              required
            />
            <label htmlFor="password">Professor Code (xZ6f24K)</label>
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
