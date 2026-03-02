//import {type} from "@testing-library/user-event/dist/type";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
            ],
            newMessageBody : ""
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber()  {

},
    subscribe (observer)  {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                LikesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
            }
        }

    }

export const addPostActionCreator = () => {

    return {
        type: ADD_POST
    }
}
export const UpdateNewPostTextActionCreator = (text) => {

    return {
        type:  UPDATE_NEW_POST_TEXT, newText: text
    }
}


export default store;