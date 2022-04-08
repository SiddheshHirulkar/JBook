import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import FolderTreeContainer from '../folderTree/folder-tree-container';
import { folderTreeState } from '../folderTree/folderTree-interface';
import './sidebar.css';

interface SidebarProps {
  sidebar: boolean;
  showSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar, showSidebar }) => {

  return (
    <Fragment>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} id="sidebar">
        <ul className="nav-menu-items">
          <li className="nav-text">
            <span onClick={showSidebar} className="sidebar-main-menu">
              <FontAwesomeIcon icon={faClose} />
            </span>
          </li>
          <FolderTreeContainer folderTreeState={folderTreeState} />
        </ul>
      </nav>
    </Fragment>
  );
}

export default Sidebar;
