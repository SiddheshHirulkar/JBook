import { produce } from 'immer';
import { ActionTypes } from "../action-types";
import { Action } from '../actions';

interface FolderTreeState {
  folderState: object;
}

const initialState: FolderTreeState = {
  folderState: {}
};

const folderTreeState = produce((state: FolderTreeState = initialState, action: Action): FolderTreeState => {
  switch (action.type) {
    case ActionTypes.SET_FOLDER_STATUS:
      const newFolderState = action.payload.childrenTreeState;
      return {
        folderState: {...newFolderState}
      }

    case ActionTypes.CHANGE_FOLDER_STATUS:
      let folderStatus: any = {...state.folderState};
      folderStatus[action.payload.folderId] = !folderStatus[action.payload.folderId];
      return  {
        folderState: folderStatus
      }

    default:
      return state;
  }
}, initialState);

export default folderTreeState;
