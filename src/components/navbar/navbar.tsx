import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './navbar.css';
import Sidebar from '../sidebar/sidebar';

const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return(
    <Fragment>
      <div className="navbar">
        <span onClick={showSidebar} className="menu-bars">
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
      <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
    </Fragment>
  );
}

export default Navbar;
