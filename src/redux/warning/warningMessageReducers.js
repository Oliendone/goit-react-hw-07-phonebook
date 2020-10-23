import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import warningMessageActions from './warningMessageActions';

const warningMessage = createReducer(
  {},
  {
    [warningMessageActions.showMessage]: (state, action) => {
      return action.payload;
    },
    [warningMessageActions.hideMessage]: (state, action) => {
      return action.payload;
    },
  },
);

export default combineReducers({ warningMessage });
