import { produce } from 'immer';

import { ActionTypes } from "../action-types";
import { Action } from '../actions';
import { FolderTree } from '../../components/folderTree/folderTree-interface';
import { createNewFolderData, renameExistingFolder, deleteFolderFromTree } from '../../utils/folderTreeUtils';
import { isUndefined } from 'lodash';

interface FolderTreeState {
  folderState: object;
}

interface FolderState {
  [key: string]: boolean;
}

interface FolderStatus {
  folderState: FolderState | {}
}

interface InitialFolderStructure {
  data: FolderTree[];
  loading: boolean;
}

const initialState: FolderStatus = {
  folderState: {}
};

const initialFolderStructure: InitialFolderStructure = {
  data: [],
  loading: false
}

export const folderTreeState = produce((state: FolderTreeState = initialState, action: Action): FolderTreeState => {
  switch (action.type) {
    case ActionTypes.SET_FOLDER_STATUS:
      const newFolderState = action.payload.childrenTreeState;
      return {
        folderState: {...newFolderState}
      }

    case ActionTypes.CHANGE_FOLDER_STATUS:
      let folderStatus: FolderState = {...state.folderState};
      if (!isUndefined(action.payload.isAlwaysOpen)) {
        folderStatus[action.payload.folderId] = action.payload.isAlwaysOpen;
      } else {
        folderStatus[action.payload.folderId] = !folderStatus[action.payload.folderId];
      }

      return  {
        folderState: folderStatus
      }

    default:
      return state;
  }
}, initialState);

export const folderTreeStructure = produce((state: InitialFolderStructure = initialFolderStructure, action: Action): InitialFolderStructure => {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_FOLDER_SUCCESS:
      const modifiedTreeData = createNewFolderData(state.data, action.payload.newFolderName, action.payload.parentNode);
      return {
        data: modifiedTreeData,
        loading: false
      }
    
    case ActionTypes.CREATE_NEW_FOLDER_FAILURE:
      return state;

    case ActionTypes.RENAME_FOLDER_SUCCESS:
      const afterRenameTreeData = renameExistingFolder(state.data, action.payload.folderRename, action.payload.parentNode);
      return {
        data: afterRenameTreeData,
        loading: false
      }
    
    case ActionTypes.RENAME_FOLDER_FAILURE:
      return state;

    case ActionTypes.DELETE_FOLDER_SUCCESS:
      const afterDeletionTreeData = deleteFolderFromTree(state.data, action.payload.folderId);
      return {
        data: afterDeletionTreeData,
        loading: false
      }

    default:
      return state;
  }
}, initialFolderStructure);
