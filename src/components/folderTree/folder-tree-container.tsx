import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import FolderTreeComponent from './folder-tree';
import { FolderTreeStructure } from './folderTree-interface';

interface FolderTreeContainerProps {
  folderTreeState: FolderTreeStructure;
}

const FolderTreeContainer: React.FC<FolderTreeContainerProps> = ({ folderTreeState }) => {
  return (
    <Fragment>
      <li className="nav-text">
        <span className="tree-main-menu">
          <FontAwesomeIcon className="tree-main-menu-icon" icon={faFolderPlus} />
          <p className="tree-main-menu-text">Create New Folder</p>
        </span>
      </li>
      <FolderTreeComponent folderTreeState={folderTreeState} />
    </Fragment>
  );
}

export default FolderTreeContainer;
