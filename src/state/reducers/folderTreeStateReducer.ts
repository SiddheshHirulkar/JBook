import { produce } from 'immer';

import { ActionTypes } from "../action-types";
import { Action } from '../actions';
import { FolderTree } from '../../components/folderTree/folderTree-interface';
import { createNewFolderData } from '../../utils/folderTreeUtils';

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
      folderStatus[action.payload.folderId] = !folderStatus[action.payload.folderId];
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
      console.log(modifiedTreeData, 'modified tree data')
        return {
          data: modifiedTreeData,
          loading: false
        }

    default:
      return state;
  }
}, initialFolderStructure);
