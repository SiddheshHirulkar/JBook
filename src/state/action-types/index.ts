export enum ActionTypes {
  MOVE_CELL = 'move_cell',
  DELETE_CELL = 'delete_cell',
  INSERT_CELL_AFTER = 'insert_cell_after',
  UPDATE_CELL = 'update_cell',
  BUNDLE_START = 'bundle_start',
  BUNDLE_COMPLETE = 'bundle_complete',

  /* Action types for storing open/close state of folder */
  SET_FOLDER_STATUS = 'set_folder_status',
  CHANGE_FOLDER_STATUS = 'change_folder_status',

  /* Action types for creating folder */
  CREATE_NEW_FOLDER = 'create_new_folder',
  CREATE_NEW_FOLDER_SUCCESS = 'create_new_folder_success',
  CREATE_NEW_FOLDER_FAILURE = 'create_new_folder_failure'
};
