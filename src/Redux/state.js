let store = {

    _state: {
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
                    id: 1,
                    message: "Hi"
                },
                {
                    id: 2,
                    message: "How are you"
                },
                {
                    id: 3,
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

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State Changed')
    },

    addPost() {
        let post = {
            id: this._state.profile.postsData.length + 1,
            message: this._state.profile.newPostValue,
            likesCount: 0
        }
        this._state.profile.postsData.push(post)
        this._state.profile.newPostValue = ''
        this._callSubscriber(this._state);
    },
    changeNewPostValue(value) {
        this._state.profile.newPostValue = value;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


}

export default store