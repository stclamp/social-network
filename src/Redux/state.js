import {rerenderEntireTree} from "../render";

let state = {
    profile: {
        postsData: [
            {
                id: 1,
                message: "Hi, it's my first post!",
                likesCount: 5
            },
            {
                id: 2,
                message: "How are you?",
                likesCount: 15
            },
        ],
        newPostValue: ''
    },
    dialogs: {
        dialogsData: [
            {
                id: 1,
                name: 'Pavel'
            },
            {
                id: 2,
                name: 'Aliona'
            },
            {
                id: 3,
                name: 'Yevhen'
            },
            {
                id: 4,
                name: 'Alex'
            },
            {
                id: 5,
                name: 'Ruslan'
            },
            {
                id: 6,
                name: 'Mom'
            },
        ],
        messagesData: [
            {
                id:1,
                message: "Hi"
            },
            {
                id:2,
                message: "How are you"
            },
            {
                id:3,
                message: "I'm doing my best"
            },
        ],
    },
    sideBar: {
        sideBarData: [
            {
                id: 1,
                name: 'Pavel'
            },
            {
                id: 2,
                name: 'Aliona'
            },
            {
                id: 3,
                name: 'Yevhen'
            }
        ]
    }

}

export const addPost = () => {
    let post = {
        id: state.profile.postsData.length + 1,
        message: state.profile.newPostValue,
        likesCount: 0
    }
    state.profile.postsData.push(post)
    state.profile.newPostValue = ''
    rerenderEntireTree(state);
}

export const changeNewPostValue = (value) => {
    state.profile.newPostValue = value;
    rerenderEntireTree(state);
}

export default state