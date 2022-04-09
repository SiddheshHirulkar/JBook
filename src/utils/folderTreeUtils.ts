import { cloneDeep, isArray } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { FolderTree } from '../components/folderTree/folderTree-interface';

export const createNewFolderData = (treeData: FolderTree[], newFolderName: string, parentNode: string) :FolderTree[] => {
  let newTreeData: FolderTree[] = cloneDeep(treeData);
  const newFolderData: FolderTree = {
    id: uuidv4(),
    type: 'folder',
    name: newFolderName,
    items: []
  }

  if (parentNode === 'globalParent' && isArray(newTreeData)) {
    newTreeData.push(newFolderData);
  } else {
    newTreeData = breadthFirstSearch(treeData, newFolderData, parentNode);
  }

  return newTreeData;
};

const breadthFirstSearch = (treeData: FolderTree[], newFolderData: FolderTree, parentNode: string): FolderTree[] => {
  const modifiedTreeData: FolderTree[] = cloneDeep(treeData);

  return modifiedTreeData;
};
