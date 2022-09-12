import React, { Fragment, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLaptopCode, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

import './navbar.css';
import Sidebar from '../sidebar/sidebar';
import { useTypedSelector } from '../../hooks/use-typed-selector';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const [location, setLocation] = useState('/');
  const history = useHistory();

  const pageLocation: any = useTypedSelector((state) => {
    return state.pageLocation;
  });

  useEffect(() => {
    setLocation(pageLocation);
  }, [pageLocation]);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Fragment>
      <div className={`navbar ${location === '/' && 'navbar-fixed'}`}>
        <span className="full-width">
          {location === '/' ?
            <div className="navbar-items-wrapper">
              <div>
                <h3 onClick={() => history.push('/')} className="brand-title margin-left-30">
                  Code<span className="brand-title-subpart">Book</span>
                  <FontAwesomeIcon className="footer-title-icon" icon={faLaptopCode} />
                </h3>
              </div>
              <div className="sign-in-button margin-right-30">
                Sign In
                <FontAwesomeIcon className="sign-in-button-icon" icon={faUserCircle} />
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
              <div className="sign-in-button margin-right-30">
                Sign In
                <FontAwesomeIcon className="sign-in-button-icon" icon={faUserCircle} />
              </div>
            </div>}
        </span>
      </div>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </Fragment>
  );
}

export default Navbar;
