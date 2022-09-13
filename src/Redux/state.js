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
        ]
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

export default state