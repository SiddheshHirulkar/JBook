import React from 'react'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sign-in.css';
import LoginForm from './login-form';
import { Link } from 'react-router-dom';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const SignIn: React.FC = () => {
  const iconGithub = faGithub as IconProp;
  const iconFacebook = faFacebook as IconProp;

  return (
    <div className="sign-in-page-wrapper">
      <div className="sign-in-page-container">

        {/* ----------------------- Brand Heading --------------------------- */}
        <section className="brand-heading-wrapper">
          <h1 className="login-text-heading">Log In</h1>
          <h3 className="brand-title login-brand-header">
            CodeBook
            <FontAwesomeIcon className="footer-title-icon" icon={faLaptopCode} />
          </h3>
        </section>
        
        <div className="login-info-container">
          {/* ----------------------- Login Form --------------------------- */}
          <section className="login-form-wrapper">
            <LoginForm />
          </section>

          <section className="border-seperator"></section>
          
          {/* ----------------------- Authetication section --------------------------- */}
          <section className="authentication-section">
            <div className="auth-button">
              <button className="auth-btn button-google">
                <img
                  src="svgs/icon-google.svg"
                  alt="google-Icon"
                  className="auth-button-icon google-icon"
                  typeof="svg"
                />
                Log In with Google
              </button>
            </div>
            <div className="auth-button">
              <button className="auth-btn button-github">
                <FontAwesomeIcon className="auth-button-icon" icon={iconGithub} />
                Log In with GitHub
              </button>
            </div>
            <div className="auth-button">
              <button className="auth-btn button-facebook">
                <FontAwesomeIcon className="auth-button-icon" icon={iconFacebook} />
                Log In with Facebook
              </button>
            </div>
          </section>
        </div>

        <div className="sign-up-text">Need an account? 
          <Link className="sign-up-link" to="#"> Sign up now!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
