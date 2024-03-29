import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';
import { folderTreeState, folderTreeStructure } from './folderTreeStateReducer';
import { pageLocation } from './locationReducer';

const reducers = combineReducers({
  cells: CellsReducer,
  bundles: bundlesReducer,
  folderTreeState,
  folderTreeStructure,
  pageLocation
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
