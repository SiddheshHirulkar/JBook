import React, { Fragment, useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faFolder, faFolderPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { isNull, isUndefined } from 'lodash';

import { FolderTreeStructure, FileStructure } from './folderTree-interface';
import NewFolderFileComponent from './new-folder-file-component';
import { useActions } from '../../hooks/use-actions';

interface FolderComponentProps {
  id: string;
  type: string;
  name: string;
  items?: FileStructure | FolderTreeStructure;
  handleClick?: (id: string) => void;
}

const FolderComponent: React.FC<FolderComponentProps> = ({ id, name, handleClick }) => {
  
  const [showNewFolder, setShowNewFolder] = useState(false);
  const [showRenameFolder, setShowRenameFolder] = useState(false);
  const [fieldType, setFieldType] = useState<'folder' | 'file'>('folder');
  const [folderName, setFolderName] = useState('');
  const [folderOperation, setFolderOperation] = useState<'create' | 'rename' | 'delete'>('create');
  let fieldRef = useRef<HTMLDivElement>(null);
  const { deleteFolder } = useActions();

  useEffect(() => {
    const sidebar: HTMLInputElement | null = document.querySelector('#sidebar');
    if (!isNull(sidebar)) {
      sidebar.addEventListener('click', (event: any) => {
        if (!isNull(fieldRef.current) && !fieldRef.current.contains(event.target)) {
          setShowNewFolder(false);
          setShowRenameFolder(false);
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
    setFieldType('folder');
    setFolderOperation('create');
    setShowNewFolder(!showNewFolder);
  }

  const createNewFile = () => {
    setFieldType('file');
    setShowNewFolder(!showNewFolder);
  }

  const renameEntity = () => {
    setShowRenameFolder(!showRenameFolder);
    setFolderOperation('rename');
    setFolderName(name);
  }

  const deleteEntity = () => {
    deleteFolder(id);
  }
  
  return (
    <Fragment>
      <li className="tree-folder-container">
        <span className="tree-folder-specifications">
          <FontAwesomeIcon className="folder-icon" onClick={folderIconClick} icon={faFolder} />
          {showRenameFolder ? (
            <div className="folder-text" ref={fieldRef}>
              <NewFolderFileComponent 
                setShowField={setShowRenameFolder}
                childType={fieldType}
                oldFieldName={folderName}
                parentNode={id}
                folderOperation={folderOperation}
              />
            </div>
            ) : (<p className="folder-text">{name}</p>)
          }
        </span>
        <span className="tree-folder-icon-specification">
          <FontAwesomeIcon className="tree-folder-icon" icon={faFolderPlus} onClick={createNewFolder} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faFile} onClick={createNewFile} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faPencil} onClick={renameEntity} />
          <FontAwesomeIcon className="tree-folder-icon" icon={faTrash} onClick={deleteEntity}/>
        </span>
      </li>
      {showNewFolder &&
        <li className="tree-new-folder">
          <div ref={fieldRef}>
            <NewFolderFileComponent
              containerClass="margin-left-22"
              setShowField={setShowNewFolder}
              childType={fieldType}
              oldFieldName={folderName}
              parentNode={id}
              folderOperation={folderOperation}
            />
          </div>
        </li>
      }
    </Fragment>
  );
}

export default FolderComponent;
