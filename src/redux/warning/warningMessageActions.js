const showMessage = text => ({
  type: 'warning/showMessage',
  payload: {
    text,
    pushWarningMessage: true,
  },
});

const hideMessage = text => ({
  type: 'warning/hideMessage',
  payload: {
    text,
    pushWarningMessage: false,
  },
});

export default { showMessage, hideMessage };
