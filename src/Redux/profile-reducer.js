const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_VALUE = "CHANGE-NEW-POST-VALUE";

const profileReducer = (state, action) => {
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
  }

  return state;
};
