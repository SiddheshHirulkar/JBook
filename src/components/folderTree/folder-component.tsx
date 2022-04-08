import React, { Fragment, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFolder, faFolderPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { isNull, isUndefined } from 'lodash';

import { FolderTreeStructure, FileStructure } from './folderTree-interface';
import NewFolderComponent from './new-folder-component';

interface FolderComponentProps {
  id: string;
  type: string;
  name: string;
  items?: FileStructure | FolderTreeStructure;
  handleClick?: (id: string) => void;
}

const FolderComponent: React.FC<FolderComponentProps> = ({ id, name, handleClick }) => {
  
  const [showNewFolder, setShowNewFolder] = useState(false);
  let fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebar: HTMLInputElement | null = document.querySelector('#sidebar');
    if (!isNull(sidebar)) {
      sidebar.addEventListener('click', (event: any) => {
        if (!isNull(fieldRef.current) && !fieldRef.current.contains(event.target)) {
          setShowNewFolder(false);
        }
      });
    }
  });

  const folderIconClick = (): void => {
    if (!isUndefined(handleClick)) {
      handleClick(id);
    }
  }

  const createNewFolder = () => {
    setShowNewFolder(!showNewFolder);
  }
  
  return (
    <Fragment>
      <li className="tree-folder-container">
        <span className="tree-folder-specifications">
          <FontAwesomeIcon className="folder-icon" onClick={folderIconClick} icon={faFolder} />
          <p className="folder-text">{name}</p>
        </span>
        <span className="tree-folder-icon-specification">
          <FontAwesomeIcon className="tree-folder-icon" icon={faFolderPlus} onClick={createNewFolder} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faFile} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faPencil} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faTrash} />
        </span>
      </li>
      {showNewFolder &&
        <li className="tree-new-folder">
          <div ref={fieldRef}>
            <NewFolderComponent 
              containerClass="margin-left-22"
              setShowField={setShowNewFolder}
            />
          </div>
        </li>
      }
    </Fragment>
  );
}

export default FolderComponent;
