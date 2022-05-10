import { cloneDeep, find, isArray, isEmpty, isUndefined } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { FolderTree } from '../components/folderTree/folderTree-interface';

/* ---------------------------------- Utility functions for folders --------------------------------------- */

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
  let modifiedTreeData: FolderTree[] = cloneDeep(treeData);
  searchTermInTree(modifiedTreeData, parentNode, 'create', newFolderData);
  return modifiedTreeData;
};

const searchTermInTree = (treeArray: FolderTree[], parentId: string, folderOperation: string, newFolderData?: FolderTree | string) => {
  if (treeArray.length >= 0) {
    let elementAppended = false;

    debugger;
    treeArray.forEach((element: any) => {
      if (element.type === 'folder') {
        if (element.id === parentId) {
          switch (folderOperation) {
            case 'create':
              element.items = [...element.items, newFolderData];
              elementAppended = true;
              break;
            
            case 'rename':
              element.name = newFolderData;
              elementAppended = true;
              break;

            default:
              break;
          }
        }
      } else if (element.type === 'file') {
        if (element.id === parentId) {
          switch (folderOperation) {
            
            case 'rename':
              element.name = newFolderData;
              elementAppended = true;
              break;

            default:
              break;
          }
        }
      }
    });

    if (!elementAppended) {
      treeArray.forEach((element: any) => {
        if (element.type === 'folder') {
          searchTermInTree(element.items, parentId, folderOperation, newFolderData);
        }
      });
    }
  }
};

export const renameExistingFolder = (treeData: FolderTree[], folderRename: string, parentNode: string): FolderTree[] => {
  let newTreeData: FolderTree[] = cloneDeep(treeData);
  searchTermInTree(newTreeData, parentNode, 'rename', folderRename);
  return newTreeData;
};

export const deleteFolderFromTree = (treeData: FolderTree[], folderId: string): FolderTree[] => {
  let newTreeData: FolderTree[] = cloneDeep(treeData);
  let parentIdStatus = {
    parentId: '',
    isParentIdFound: false
  };
  const parentFolderId = getParentId(treeData, folderId, 'delete', parentIdStatus);
  newTreeData = deleteTermFromTree(newTreeData, folderId, 'delete', parentFolderId.parentId);
  return newTreeData;
}

interface ParentIdStatus {
  parentId: string;
  isParentIdFound: boolean;
}

const getParentId = (treeArray: FolderTree[], parentId: string, folderOperation: string, parentIdStatus?: ParentIdStatus): ParentIdStatus => {
  let parentFolderIdStatus: ParentIdStatus;

  if (!isUndefined(parentIdStatus)) {
    parentFolderIdStatus = parentIdStatus;
  } else {
    parentFolderIdStatus = {
      parentId: '',
      isParentIdFound: false
    };
  }

  if (treeArray.length >= 0 && parentFolderIdStatus?.isParentIdFound === false) {
    let elementAppended = false;

    if (folderOperation === 'delete') {
      for (const folderData of treeArray) {
        const parentFolderData = find(folderData.items, { id: parentId });
        if (!isUndefined(parentFolderData)) {
          if (!isUndefined(folderData.id)) {
            parentFolderIdStatus = {
              parentId: folderData.id,
              isParentIdFound: true
            };
          } else {
            parentFolderIdStatus = {
              parentId: 'globalParent',
              isParentIdFound: true
            };
          }
          elementAppended = true;
          break;
        }
      };
    }

    if (!elementAppended) {
      treeArray.forEach((element: any) => {
        if (element.type === 'folder') {
          parentFolderIdStatus = getParentId(element.items, parentId, folderOperation, parentFolderIdStatus);
        }
      });
    }
  }

  return parentFolderIdStatus;
};

const deleteTermFromTree = (treeArray: FolderTree[], parentId: string, folderOperation: string, parentFolderId: string) => {
  if (treeArray.length >= 0) {
    let elementAppended = false;

    if (folderOperation === 'delete' && isEmpty(parentFolderId)) {
      const parentFolderData = find(treeArray, { id: parentId });
      if (!isUndefined(parentFolderData)) {
        treeArray = treeArray.filter((folderTree) => {
          return folderTree.id !== parentFolderData.id;
        });
        elementAppended = true;
      }
    } else if (!isEmpty(parentFolderId)) {
      for (let node of treeArray) {
        if (node.id === parentFolderId && !isUndefined(node.items) && node.items instanceof Array) {
          const nodeItemsAfterDelete = node.items.filter((folderTree) => {
            return folderTree.id !== parentId;
          });
          node.items = nodeItemsAfterDelete;
          elementAppended = true;
          break;
        }
      };
    }

    if (!elementAppended) {
      treeArray.forEach((element: any) => {
        if (element.type === 'folder') {
          deleteTermFromTree(element.items, parentId, folderOperation, parentFolderId);
        }
      });
    }
  }

  return treeArray;
};

/* ---------------------------------- Utility functions for files --------------------------------------- */

export const createNewFileData = (treeData: FolderTree[], newFileName: string, parentNode: string) :FolderTree[] => {
  let newTreeData: FolderTree[] = cloneDeep(treeData);
  const newFileData: FolderTree = {
    id: uuidv4(),
    type: 'file',
    name: newFileName
  }

  newTreeData = breadthFirstSearch(treeData, newFileData, parentNode);

  return newTreeData;
};
