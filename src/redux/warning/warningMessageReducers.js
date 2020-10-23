import { combineReducers } from 'redux';

const warningMessage = (state = {}, { type, payload }) => {
  switch (type) {
    case 'warning/showMessage':
      return payload;

    case 'warning/hideMessage':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({ warningMessage });
