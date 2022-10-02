import React, { useState } from 'react';

import './login-form.css';

const LoginForm: React.FC = () => {
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
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
