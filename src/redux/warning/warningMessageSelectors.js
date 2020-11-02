const getKnownMessage = state =>
  state.message.warningMessage.pushWarningMessage;

const getWarningText = state => state.message.warningMessage.text;

export default {
  getWarningText,
  getKnownMessage,
};
