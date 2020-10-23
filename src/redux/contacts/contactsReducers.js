import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactsActions';

const itemsReducer = createReducer([], {
  [contactActions.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [contactActions.deleteContact]: (state, action) =>
    state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer('', {
  [contactActions.filterContacts]: (state, action) => action.payload.filter,
});

export default combineReducers({ items: itemsReducer, filter: filterReducer });

//
