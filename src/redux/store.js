import { createStore, combineReducers } from 'redux';
import contactsReducers from './contacts/contactsReducers';
import warningMessage from './warning/warningMessageReducers';

const rootReducer = combineReducers({
  contacts: contactsReducers,
  message: warningMessage,
});

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.log(persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
