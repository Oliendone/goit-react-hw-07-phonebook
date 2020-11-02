import contactsReducers from './contacts/contactsReducers';
import warningMessage from './warning/warningMessageReducers';
import thunk from 'redux-thunk';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    message: warningMessage,
  },
  middleware: [...defaultMiddleware, thunk],
});

export default store;
