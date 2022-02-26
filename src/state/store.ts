import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionTypes } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: '45a45dsadas',
    type: 'code'
  }
});

store.dispatch({
  type: ActionTypes.INSERT_CELL_AFTER,
  payload: {
    id: 'ad1sad156sad5sada',
    type: 'text'
  }
});
