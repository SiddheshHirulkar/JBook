import React, { Fragment } from 'react';

import { FolderTreeStructure } from './folderTree-interface';
import './folder-tree.css';
import { isEmpty, isUndefined } from 'lodash';
import FolderComponent from './folder-component';
import FileComponent from './file-component';

interface FolderTreeComponentProps {
  folderTreeState: FolderTreeStructure;
}

const FolderTreeComponent: React.FC<FolderTreeComponentProps> = ({ folderTreeState }) => {  
  console.log(folderTreeState, 'foldertreestate')

  const renderFolderTree = folderTreeState instanceof Array && (
    folderTreeState.map((node) => {
      if (node.type === 'folder' && isEmpty(node.items)) {
        return (
          <FolderComponent {...node} />
        )
      } else if (node.type === 'folder' && !isEmpty(node.items)) {
        return (
          <Fragment>
            <FolderComponent {...node} />
            <FolderTreeComponent folderTreeState={node.items} />
          </Fragment>
        )
      } else if (node.type === 'file') {
        return (
          <FileComponent {...node} />
        )
      }
      return null;
    })
  );

  return (
    <Fragment>
      {!isUndefined(folderTreeState) ? renderFolderTree : ''}
    </Fragment>
  );
};

export default FolderTreeComponent;
