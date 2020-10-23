import { createStore, combineReducers } from 'redux';
import contactsReducers from './contacts/contactsReducers';
import warningMessage from './warning/warningMessageReducers';

import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   contacts: contactsReducers,
//   message: warningMessage,
// });

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    message: warningMessage,
    preloadedState,
  },
});

console.log(preloadedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
