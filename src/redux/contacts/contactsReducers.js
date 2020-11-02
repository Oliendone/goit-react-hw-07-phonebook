import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import contactActions from './contactsActions';

const addContact = (state, action) => [...state, action.payload];

const deleteContact = (state, action) =>
  state.filter(item => item.id !== action.payload);

const itemsReducer = createReducer([], {
  [contactActions.addContactSuccess]: addContact,
  [contactActions.deleteContactSuccess]: deleteContact,
  [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
});

const filterReducer = createReducer('', {
  [contactActions.filterContacts]: (state, action) => action.payload,
});

export default combineReducers({ items: itemsReducer, filter: filterReducer });

//
