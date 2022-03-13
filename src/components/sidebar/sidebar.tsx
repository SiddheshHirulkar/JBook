import React, { Fragment } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
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
          <li className="nav-text"><span onClick={showSidebar} className="sidebar-collapse"><FontAwesomeIcon icon={faClose} /></span></li>
          {/* Sidebar items */}
          <li className="nav-text"><span className="nav-text-item"><FontAwesomeIcon className="folder-icon" icon={faFolder} />New Folder</span></li>
          <li className="nav-text"><span className="nav-text-item"><FontAwesomeIcon className="folder-icon" icon={faFolder} />New Folder 1</span></li>
          <li className="nav-text"><span className="nav-text-item"><FontAwesomeIcon className="folder-icon" icon={faFolder} />New Folder 2</span></li>
          <li className="nav-text"><span className="nav-text-item"><FontAwesomeIcon className="folder-icon" icon={faFolder} />New Folder 3</span></li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Sidebar;
