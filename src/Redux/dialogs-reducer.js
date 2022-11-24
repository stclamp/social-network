const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.value;
      return state;
    case SEND_MESSAGE:
      let message = {
        id: state.messagesData.length + 1,
        message: state.newMessageText,
      };
      state.messagesData.push(message);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value: value,
});

export default dialogsReducer;
