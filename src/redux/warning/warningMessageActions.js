import { createAction } from '@reduxjs/toolkit';

const showMessage = createAction('warning/showMessage', text => ({
  payload: {
    text,
    pushWarningMessage: true,
  },
}));

const hideMessage = createAction('warning/showMessage', text => ({
  payload: {
    text,
    pushWarningMessage: false,
  },
}));

export default { showMessage, hideMessage };
