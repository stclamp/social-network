const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_VALUE = "CHANGE-NEW-POST-VALUE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profile: {
      postsData: [
        {
          id: 1,
          message: "Hi, it's my first post!",
          likesCount: 5,
        },
        {
          id: 2,
          message: "How are you?",
          likesCount: 15,
        },
      ],
      newPostValue: "",
    },
    dialogs: {
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
    },
    sideBar: {
      sideBarData: [
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
      ],
    },
  },
  _callSubscriber() {
    console.log("State Changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let post = {
        id: this._state.profile.postsData.length + 1,
        message: this._state.profile.newPostValue,
        likesCount: 0,
      };
      this._state.profile.postsData.push(post);
      this._state.profile.newPostValue = "";
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_NEW_POST_VALUE) {
      this._state.profile.newPostValue = action.value;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogs.newMessageText = action.value;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let message = {
        id: this._state.dialogs.messagesData.length + 1,
        message: this._state.dialogs.newMessageText,
      };
      this._state.dialogs.messagesData.push(message);
      this._state.dialogs.newMessageText = "";
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const changeNewPostValueActionCreator = (value) => ({
  type: CHANGE_NEW_POST_VALUE,
  value: value,
});

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (value) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  value: value,
});

export default store;
