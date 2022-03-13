import React, { Fragment } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faFolder } from '@fortawesome/free-solid-svg-icons'

import FolderTreeComponent from '../folderTree/folder-tree';
import './sidebar.css';

interface SidebarProps {
  sidebar: boolean;
  showSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, showSidebar }) => {
  return (
    <Fragment>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="nav-text">
            <span onClick={showSidebar} className="sidebar-main-menu">
              <FontAwesomeIcon icon={faClose} />
            </span>
          </li>
          {/* Sidebar items */}
          <FolderTreeComponent />
        </ul>
      </nav>
    </Fragment>
  );
}

export default Sidebar;
