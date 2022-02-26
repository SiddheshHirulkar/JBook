import { combineReducers } from 'redux';
import CellsReducer from './cellsReducer';
import bundlesReducer from './bundlesReducer';

const reducers = combineReducers({
  cells: CellsReducer,
  bundles: bundlesReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
