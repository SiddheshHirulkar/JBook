import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFolder, faFolderPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

import { FolderTreeStructure, FileStructure } from './folderTree-interface';

interface FolderComponentProps {
  id: string;
  type: string;
  name: string;
  items?: FileStructure | FolderTreeStructure;
  handleClick(id: string): void;
}

const FolderComponent: React.FC<FolderComponentProps> = ({ id, name, handleClick }) => {
  return (
    <Fragment>
      <li className="tree-folder-container">
        <span className="tree-folder-specifications">
          <FontAwesomeIcon className="folder-icon" onClick={() => handleClick(id)} icon={faFolder} />
          <p className="folder-text">{name}</p>
        </span>
        <span className="tree-folder-icon-specification">
          <FontAwesomeIcon className="tree-folder-icon" icon={faFolderPlus} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faFile} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faPencil} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faTrash} />
        </span>
      </li>
    </Fragment>
  );
}

export default FolderComponent;
