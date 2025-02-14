let store =  {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Wow, Mclaren', LikesCount: 34},
                {id: 2, message: 'beautiful MCL34', LikesCount: 69},
                {id: 3, message: 'MClaren best', LikesCount: 74}
            ],
            newPostText: 'Enter the text'
        },

        dialogPage: {
            dialog:
                [
                    {id: 0, name: 'Dea'},
                    {id: 1, name: 'Max'},
                    {id: 2, name: 'Senna'}
                ],
            message: [
                {id: 0, message: 'McLaren 720s best in the world'},
                {id: 1, message: 'McLaren Automotive Limited'},
                {id: 2, message: 'McLaren'}
            ]

        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber()  {

},
    addPost  ()  {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            LikesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText)  {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                LikesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    }
}


export default store;