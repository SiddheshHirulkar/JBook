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
  CREATE_NEW_FOLDER_SUCCESS = 'create_new_folder_success',
  CREATE_NEW_FOLDER_FAILURE = 'create_new_folder_failure',

  /* Action types for renaming folder */
  RENAME_FOLDER_SUCCESS = 'rename_folder_success',
  RENAME_FOLDER_FAILURE = 'rename_folder_failure',

  /* Action types for deleting folder */
  DELETE_FOLDER_SUCCESS = 'delete_folder_success',
  DELETE_FOLDER_FAILURE = 'delete_folder_failure',

  /* Action types for creating file */
  CREATE_NEW_FILE_SUCCESS = 'create_new_file_success',
  CREATE_NEW_FILE_FAILURE = 'create_new_file_failure',

  /* Action types for renaming file */
  RENAME_FILE_SUCCESS = 'rename_file_success',
  RENAME_FILE_FAILURE = 'rename_file_failure',

  /* Action types for deleting file */
  DELETE_FILE_SUCCESS = 'delete_file_success',
  DELETE_FILE_FAILURE = 'delete_file_failure',
};
