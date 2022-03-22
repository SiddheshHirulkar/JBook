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
  
  const renderFolderTree = folderTreeState instanceof Array && (
    folderTreeState.map((node) => {
      if (node.type === 'folder' && isEmpty(node.items)) {
        return (
          <div className="margin-left-10">
            <FolderComponent {...node} />
          </div>
        )
      } else if (node.type === 'folder' && !isEmpty(node.items)) {
        return (
          <div className="margin-left-10">
            <FolderComponent {...node} />
            <FolderTreeComponent folderTreeState={node.items} />
          </div>
        )
      } else if (node.type === 'file') {
        return (
          <div className="margin-left-10">
            <FileComponent {...node} />
          </div>
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
