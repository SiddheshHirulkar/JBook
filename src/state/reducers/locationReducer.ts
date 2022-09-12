import { produce } from 'immer';

import { ActionTypes } from "../action-types";
import { Action } from '../actions';

const initialState: string = ''

export const pageLocation = produce((state: string = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.STORE_LOCATION_SUCCESS:
      return action.payload.pageLocation;
    default:
      return state;
  }
}, initialState);
