import React from 'react';
import FolderTree, { testData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';

const FolderTreeComponent: React.FC = () => {
  const onTreeStateChange = (state: object, event: any) => {
    console.log(state, event);
  }

  return (
    <FolderTree
      data={ testData }
      onChange={ onTreeStateChange }
      showCheckbox={false}
    />
  );
};

export default FolderTreeComponent;
