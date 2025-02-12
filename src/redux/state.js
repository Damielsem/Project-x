import {rerenderEntireTree} from "../render";

let state = {

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

}
export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        LikesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;