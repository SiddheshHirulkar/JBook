import React, { useEffect } from 'react';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useHistory } from 'react-router';
import { isNull } from 'lodash';

import './sign-up.css';
import '../signIn/sign-in.css';
import { useActions } from '../../hooks/use-actions';
import SignUpForm from './signUp-form';

const SignUp: React.FC = () => {
  const iconGithub = faGithub as IconProp;
  const iconFacebook = faFacebook as IconProp;
  const history = useHistory();
  const { storePageLocation } = useActions();

  const documentBodyNode = document.querySelector('body');
  const documentHtmlNode = document.querySelector('html');

  useEffect(() => {
    if (!isNull(documentBodyNode) && !isNull(documentHtmlNode)) {
      documentBodyNode.style.height = "100%";
      documentBodyNode.style.overflow = "hidden";
      documentHtmlNode.style.height = "100%";
      documentHtmlNode.style.overflow = "hidden";
    }

    return () => {
      if (!isNull(documentBodyNode) && !isNull(documentHtmlNode)) {
        documentBodyNode.style.removeProperty("height");
        documentBodyNode.style.removeProperty("overflow");
        documentHtmlNode.style.removeProperty("height");
        documentHtmlNode.style.removeProperty("overflow");
      }
    }
  }, [documentBodyNode, documentHtmlNode]);

  const handleLogIn = () => {
    history.push('/signIn');
    storePageLocation(history.location.pathname);
  };

  return (
    <div className="sign-up-page-wrapper">
      <div className="sign-up-page-container">

        {/* ----------------------- Brand Heading --------------------------- */}
        <section className="brand-heading-wrapper align-text-center">
          <h1 className="signUp-text-heading">Sign Up</h1>
          <h3 className="brand-title signUp-brand-header">
            CodeBook
            <FontAwesomeIcon className="footer-title-icon signUp-brand-icon" icon={faLaptopCode} />
          </h3>
        </section>

        {/* ----------------------- Vertical Border --------------------------- */}
        <section className="border-seperator margin-top-50"></section>
        
        <div className="signUp-info-container">
          
          {/* ----------------------- Authetication section --------------------------- */}
          <section className="sign-up-auth">
            <div className="auth-button">
              <button className="auth-btn button-google">
                <img
                  src="svgs/icon-google.svg"
                  alt="google-Icon"
                  className="auth-button-icon google-icon"
                  typeof="svg"
                />
                Sign up with Google
              </button>
            </div>
            <div className="auth-button">
              <button className="auth-btn button-github">
                <FontAwesomeIcon className="auth-button-icon" icon={iconGithub} />
                Sign up with GitHub
              </button>
            </div>
            <div className="auth-button">
              <button className="auth-btn button-facebook">
                <FontAwesomeIcon className="auth-button-icon" icon={iconFacebook} />
                Sign up with Facebook
              </button>
            </div>
          </section>

          {/* ----------------------- Login Form --------------------------- */}
          <section>
            <SignUpForm />
          </section>

          <div className="sign-up-text">Already have an account? 
            <span onClick={handleLogIn} className="sign-up-link"> Log in now!</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;
