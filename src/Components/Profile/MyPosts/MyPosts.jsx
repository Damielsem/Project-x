import React from 'react';
import s  from './MyPorts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {



    let postElements = props.posts.map (p => <Post id={p.id} message={p.message} LikesCount={p.LikesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
let onPostChange = () => {
    let text = newPostElement.current.value;
   let action = ({type: 'UPDATE-NEW-POST-TEXT', newText: text });
    props.dispatch(action);
}
    return (
        <div className={s.PostBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>

                <div >
                    <button onClick={addPost}> add</button>
                </div>

            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;