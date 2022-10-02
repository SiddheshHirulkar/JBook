import React, { useState } from 'react';

import './signUp-form.css';
import '../signIn/login-form.css';

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) :void => {
    e.preventDefault();

    // set email and password back to default
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="name-field-wrapper">
        <div className="form-field margin-right-10">
          <label className="field-label" htmlFor="firstName">First Name</label>
          <input 
            className="field-input"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label className="field-label" htmlFor="lastName">Last Name</label>
          <input
            className="field-input"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="form-field">
          <label className="field-label" htmlFor="userName">Username</label>
          <input
            className="field-input"
            id="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      <div className="form-field">
        <label className="field-label" htmlFor="emailField">Email</label>
        <input 
          className="field-input"
          id="emailField"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
      </div>
      <div className="form-field">
        <label className="field-label" htmlFor="passwordField">Password</label>
        <input
          className="field-input"
          id="passwordField"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
        />
      </div>
      <div className="form-button">
        <button
          type="submit"
          className="form-button-submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
