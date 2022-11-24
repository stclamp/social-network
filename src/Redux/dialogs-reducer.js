const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Pavel",
    },
    {
      id: 2,
      name: "Aliona",
    },
    {
      id: 3,
      name: "Yevhen",
    },
    {
      id: 4,
      name: "Alex",
    },
    {
      id: 5,
      name: "Ruslan",
    },
    {
      id: 6,
      name: "Mom",
    },
  ],
  messagesData: [
    {
      id: 1,
      message: "Hi",
    },
    {
      id: 2,
      message: "How are you",
    },
    {
      id: 3,
      message: "I'm doing my best",
    },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
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
