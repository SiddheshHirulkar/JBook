import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { CellDirection, CellType } from '../cell';
import { 
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Action,
  SetFolderStatusAction,
  ChangeFolderStatusAction,
  CreateNewFolderSuccess,
  CreateNewFolderfailure,
  RenameFolderSuccess,
  RenameFolderFailure,
  DeleteFolderSuccess,
  DeleteFolderFailure,
  CreateNewFileSuccess,
  CreateNewFileFailure,
  RenameFileSuccess,
  RenameFileFailure,
  DeleteFileSuccess,
  DeleteFileFailure,
  StoreLocationSuccess
} from '../actions';
import bundle from '../../bundler';

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content
    }
  };
}

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id
  }
}

export const moveCell = (id: string, direction: CellDirection): MoveCellAction => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      id,
      direction
    }
  }
}

export const insertCellAfter = (id: string | null, type: CellType): InsertCellAfterAction => {
  return {
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
      id,
      type
    }
  }
}

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BUNDLE_START,
      payload: {
        cellId
      }
    });

    const result = await bundle(input);

    dispatch({
      type: ActionTypes.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: result
      }
    });
  }
}

/* ------------------------------- Action Creators to Set folder open/close status ------------------------------ */
export const setFolderStatus = (childrenTreeState: object): SetFolderStatusAction => {
  return {
    type: ActionTypes.SET_FOLDER_STATUS,
    payload: {
      childrenTreeState
    }
  }
};

export const changeFolderStatus = (folderId: string, isAlwaysOpen?: boolean): ChangeFolderStatusAction => {
  return {
    type: ActionTypes.CHANGE_FOLDER_STATUS,
    payload: {
      folderId,
      isAlwaysOpen
    }
  }
}

/* ------------------------------- Action Creators for CRUD operation of folder ------------------------------ */
export const createNewFolder = (parentNode: string, newFolderName: string): CreateNewFolderSuccess | CreateNewFolderfailure => {
  try {
    return {
      type: ActionTypes.CREATE_NEW_FOLDER_SUCCESS,
      payload: {
        parentNode,
        newFolderName
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.CREATE_NEW_FOLDER_FAILURE,
      error: message
    }
  }
}

export const renameFolder = (parentNode: string, folderRename: string): RenameFolderSuccess | RenameFolderFailure => {
  try {
    return {
      type: ActionTypes.RENAME_FOLDER_SUCCESS,
      payload: {
        parentNode,
        folderRename
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.RENAME_FOLDER_FAILURE,
      error: message
    }
  }
}

export const deleteFolder = (folderId: string): DeleteFolderSuccess | DeleteFolderFailure => {
  try {
    return {
      type: ActionTypes.DELETE_FOLDER_SUCCESS,
      payload: {
        folderId
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.DELETE_FOLDER_FAILURE,
      error: message
    }
  }
}

/* ------------------------------- Action Creators for CRUD operation of file ------------------------------ */
export const createNewFile = (parentNode: string, newFileName: string): CreateNewFileSuccess | CreateNewFileFailure => {
  try {
    return {
      type: ActionTypes.CREATE_NEW_FILE_SUCCESS,
      payload: {
        parentNode,
        newFileName
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.CREATE_NEW_FILE_FAILURE,
      error: message
    }
  }
}

export const renameFile = (parentNode: string, fileRename: string): RenameFileSuccess | RenameFileFailure => {
  try {
    return {
      type: ActionTypes.RENAME_FILE_SUCCESS,
      payload: {
        parentNode,
        fileRename
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.RENAME_FILE_FAILURE,
      error: message
    }
  }
}

export const deleteFile = (folderId: string): DeleteFileSuccess | DeleteFileFailure => {
  try {
    return {
      type: ActionTypes.DELETE_FILE_SUCCESS,
      payload: {
        folderId
      }
    }
  } catch (error) {
    let message = 'Something went wrong, please try again!';
    if (error instanceof Error) {
      message = error.message;
    }
    return {
      type: ActionTypes.DELETE_FILE_FAILURE,
      error: message
    }
  }
}

/* ---------------------- Action Creator for storing page location --------------------- */
export const storePageLocation = (location: string): StoreLocationSuccess => {
  return {
    type: ActionTypes.STORE_LOCATION_SUCCESS,
    payload: {
      pageLocation: location
    }
  }
}
