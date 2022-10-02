import React from 'react'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useHistory } from 'react-router';

import './sign-in.css';
import LoginForm from './login-form';
import { useActions } from '../../hooks/use-actions';

const SignIn: React.FC = () => {
  const iconGithub = faGithub as IconProp;
  const iconFacebook = faFacebook as IconProp;
  const history = useHistory();
  const { storePageLocation } = useActions();

  const handleSignUp = () => {
    history.push('/signUp');
    storePageLocation(history.location.pathname);
  };

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
          <span onClick={handleSignUp} className="sign-up-link"> Sign up now!</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
