import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';
import folderTreeState from './folderTreeStateReducer';

const reducers = combineReducers({
  cells: CellsReducer,
  bundles: bundlesReducer,
  folderTreeState
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
