import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLaptopCode, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import './navbar.css';
import Sidebar from '../sidebar/sidebar';
import { useTypedSelector } from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [location, setLocation] = useState('/');
  const history = useHistory();
  const { storePageLocation } = useActions();

  const pageLocation: any = useTypedSelector((state) => {
    return state.pageLocation;
  });

  useEffect(() => {
    setLocation(pageLocation);
  }, [pageLocation]);

  useEffect(() => {
    storePageLocation(history.location.pathname);
  }, []);

  const showSidebar = () => setSidebar(!sidebar);
  
  const handleLogIn = () => {
    history.push('/signIn');
    storePageLocation(history.location.pathname);
  };

  const handleSignUp = () => {
    history.push('/signUp');
    storePageLocation(history.location.pathname);
  };

  return (
    <Fragment>
      <div className={`navbar ${location !== '/cellList' ? 'navbar-fixed' : ''}`}>
        <span className="full-width">
          {location !== '/cellList' ?
            <div className="navbar-items-wrapper">
              <div>
                <h3 onClick={() => history.push('/')} className="brand-title margin-left-30">
                  Code<span className="brand-title-subpart">Book</span>
                  <FontAwesomeIcon className="footer-title-icon" icon={faLaptopCode} />
                </h3>
              </div>
              <div className="navbar-buttons">
                <div onClick={handleSignUp} className="navbar-btn sign-up-button margin-right-30">
                  Sign Up
                  <FontAwesomeIcon className="sign-in-button-icon" icon={faUserPlus} />
                </div>
                {location !== '/signIn' && (<div onClick={handleLogIn} className="navbar-btn sign-in-button margin-right-30">
                  Log In
                  <FontAwesomeIcon className="sign-in-button-icon" icon={faSignInAlt} />
                </div>)}
              </div> 
            </div> :
            <div className="navbar-items-wrapper">
              <FontAwesomeIcon onClick={showSidebar} className="menu-bars" icon={faBars} />
              <div>
                <h3 onClick={() => history.push('/')} className="brand-title">
                  Code<span className="brand-title-subpart">Book</span>
                  <FontAwesomeIcon className="footer-title-icon" icon={faLaptopCode} />
                </h3>
              </div>
              <div className="navbar-buttons">
                <div onClick={handleSignUp} className="navbar-btn sign-up-button margin-right-30">
                  Sign Up
                  <FontAwesomeIcon className="sign-in-button-icon" icon={faUserPlus} />
                </div>
                <div onClick={handleLogIn} className="navbar-btn sign-in-button margin-right-30">
                  Log In
                  <FontAwesomeIcon className="sign-in-button-icon" icon={faSignInAlt} />
                </div>
              </div>
            </div>}
        </span>
      </div>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </Fragment>
  );
}

export default Navbar;
