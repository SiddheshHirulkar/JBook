import React, { Fragment, useState } from 'react';
import FolderTree, { testData } from 'react-folder-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFolder, faFolderPlus, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

import './folder-tree.css';

const FolderTreeComponent: React.FC = () => {  
  return (
    <Fragment>
      <li className="nav-text">
        <span className="tree-main-menu">
          <FontAwesomeIcon className="tree-main-menu-icon" icon={faFolderPlus} />
          <p className="tree-main-menu-text">Create New Folder</p>
        </span>
      </li>
      <li className="tree-folder-container">
        <span className="tree-folder-specifications">
          <FontAwesomeIcon className="folder-icon" icon={faFolder} />
          <p className="folder-text">React Typescript Tutorial</p>
        </span>
        <span className="tree-folder-icon-specification">
          <FontAwesomeIcon className="tree-folder-icon" icon={faFolderPlus} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faFile} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faPencil} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faTrash} />
        </span>
      </li>
      <li className="tree-file-container margin-left-5px">
        <span className="tree-file-specifications">
          <FontAwesomeIcon className="file-icon" icon={faFile} />
          <p className="file-text">React.md</p>
        </span>
        <span className="tree-file-icon-specification">
          <FontAwesomeIcon className="tree-file-icon" icon={faPencil} />
          <FontAwesomeIcon className="tree-file-icon" icon={faTrash} />
        </span>
      </li>
    </Fragment>
  );
};

export default FolderTreeComponent;
