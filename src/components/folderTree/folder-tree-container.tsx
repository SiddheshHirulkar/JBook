import React, { Fragment, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

import FolderTreeComponent from './folder-tree';
import { FolderTreeStructure } from './folderTree-interface';
import { makeFolderIdState } from './folder-tree-utils';
import { useActions } from '../../hooks/use-actions';

interface FolderTreeContainerProps {
  folderTreeState: FolderTreeStructure;
}

const FolderTreeContainer: React.FC<FolderTreeContainerProps> = ({ folderTreeState }) => {
  let newShowChildrenState: any = useRef({});
  const {setFolderStatus} = useActions();

  useEffect(() => {
    if (folderTreeState instanceof Array) {
      newShowChildrenState.current = makeFolderIdState(folderTreeState);
      setFolderStatus(newShowChildrenState.current);
    }
  }, []);

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
