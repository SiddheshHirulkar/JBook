import React, { Fragment } from 'react';

import { FolderTreeStructure, NodeFile, NodeFolder } from './folderTree-interface';
import './folder-tree.css';
import { isEmpty, isUndefined } from 'lodash';
import FolderComponent from './folder-component';
import FileComponent from './file-component';
import { useActions } from '../../hooks/use-actions';
import { useTypedSelector } from '../../hooks/use-typed-selector';

interface FolderTreeComponentProps {
  folderTreeState: FolderTreeStructure;
}

interface FolderState {
  [key: string]: boolean;
}

interface FolderStatus {
  folderState: FolderState | {}
}

const FolderTreeComponent: React.FC<FolderTreeComponentProps> = ({ folderTreeState }) => {

  const { changeFolderStatus } = useActions();
  const folderStatus: any = useTypedSelector((state) => {
    return state.folderTreeState;
  });

  const handleClick = (nodeId: string): void => {
    changeFolderStatus(nodeId);
  }
  
  const renderFolderTree = folderTreeState instanceof Array && (
    folderTreeState.map((node) => {
      if (node.type === 'folder' && isEmpty(node.items)) {
        return (
          <div key={node.id} className="margin-left-10">
            <FolderComponent {...node} />
          </div>
        )
      } else if (node.type === 'folder' && !isEmpty(node.items)) {
        return (
          <div key={node.id} className="margin-left-10">
            <FolderComponent {...node} handleClick={handleClick} />
            {folderStatus.folderState[node.id] && <FolderTreeComponent folderTreeState={node.items} />}
            {/* {<FolderTreeComponent folderTreeState={node.items} />} */}
          </div>
        )
      } else if (node.type === 'file') {
        return (
          <div key={node.id} className="margin-left-10">
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
