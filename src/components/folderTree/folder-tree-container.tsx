import React, { Fragment, useEffect, useState, useRef, MouseEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import FolderTreeComponent from './folder-tree';
import { FolderTreeStructure } from './folderTree-interface';
import { makeFolderIdState } from './folder-tree-utils';
import { useActions } from '../../hooks/use-actions';
import NewFolderFileComponent from './new-folder-file-component';
import { isNull } from 'lodash';

interface FolderTreeContainerProps {
  folderTreeState: FolderTreeStructure;
}

interface newShowChildrenStateRef {
  current: object
}

const FolderTreeContainer: React.FC<FolderTreeContainerProps> = ({ folderTreeState }) => {
  let newShowChildrenState: newShowChildrenStateRef = useRef({});
  const { setFolderStatus } = useActions();
  const [showNewFolderField, setshowNewFolderField] = useState(false);
  let fieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (folderTreeState instanceof Array) {
      newShowChildrenState.current = makeFolderIdState(folderTreeState);
      setFolderStatus(newShowChildrenState.current);
    }
  }, []);

  useEffect(() => {
    const sidebar: HTMLInputElement | null = document.querySelector('#sidebar');
    if (!isNull(sidebar)) {
      sidebar.addEventListener('click', (event: any) => {
        if (!isNull(fieldRef.current) && !fieldRef.current.contains(event.target)) {
          setshowNewFolderField(false);
        }
      });
    }
  });

  const handleCreateNewFolder = () => {
    setshowNewFolderField(!showNewFolderField);
  };

  return (
    <Fragment>
      <li className="nav-text" onClick={handleCreateNewFolder}>
        <span className="tree-main-menu">
          <FontAwesomeIcon className="tree-main-menu-icon" icon={faFolderPlus} />
          <p className="tree-main-menu-text">Create New Folder</p>
        </span>
      </li>
      {showNewFolderField && 
        <li>
          <div ref={fieldRef}>
            <NewFolderFileComponent 
              containerClass="margin-left-22"
              setShowField={setshowNewFolderField}
              childType="folder"
              parentNode="globalParent"
              folderOperation="create"
            />
          </div>
        </li>
      }
      <FolderTreeComponent folderTreeState={folderTreeState} />
    </Fragment>
  );
}

export default FolderTreeContainer;
