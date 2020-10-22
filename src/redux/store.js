import { createStore, combineReducers } from 'redux';
import contactsRedusers from './contacts/contactsRedusers';

const rootReducer = combineReducers({
  contacts: contactsRedusers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
