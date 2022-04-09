import { ActionTypes } from '../action-types';
import { CellType, CellDirection } from '../cell';

/* --------------Actions for dealing with cells ----------------------- */
export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: CellDirection;
  }
};

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
};

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellType;
  }
};

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  }
};

export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START;
  payload: {
    cellId: string;
  }
}

export interface BundleCompleteAction {
  type: ActionTypes.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    }
  }
}

/* ------------------------ Action for open/close status of Folder -------------------------- */
export interface SetFolderStatusAction {
  type: ActionTypes.SET_FOLDER_STATUS;
  payload: {
    childrenTreeState: object;
  }
}

export interface ChangeFolderStatusAction {
  type: ActionTypes.CHANGE_FOLDER_STATUS;
  payload: {
    folderId: string;
  }
}

/* ------------------------ Action for CRUD operation of Folder -------------------------- */
export interface CreateNewFolderSuccess {
  type: ActionTypes.CREATE_NEW_FOLDER_SUCCESS;
  payload: {
    parentNode: string;
    newFolderName: string;
  }
}

export interface CreateNewFolderfailure {
  type: ActionTypes.CREATE_NEW_FOLDER_FAILURE;
  error: string;
}

export type Action = 
  MoveCellAction | 
  DeleteCellAction | 
  InsertCellAfterAction | 
  UpdateCellAction | 
  BundleStartAction | 
  BundleCompleteAction |
  SetFolderStatusAction |
  ChangeFolderStatusAction |
  CreateNewFolderSuccess |
  CreateNewFolderfailure;
