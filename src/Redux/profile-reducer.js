const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST_VALUE = "CHANGE-NEW-POST-VALUE";

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: state.postsData.length + 1,
        message: state.newPostValue,
        likesCount: 0,
      };
      state.postsData.push(post);
      state.newPostValue = "";
      return state;
    case CHANGE_NEW_POST_VALUE:
      state.newPostValue = action.value;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const changeNewPostValueActionCreator = (value) => ({
  type: CHANGE_NEW_POST_VALUE,
  value: value,
});

export default profileReducer;
