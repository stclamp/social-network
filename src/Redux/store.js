import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    profileReducer(this._state.profile, action);
    dialogsReducer(this._state.dialogs, action);
    sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
