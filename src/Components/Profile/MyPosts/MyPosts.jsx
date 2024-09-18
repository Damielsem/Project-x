import React from 'react';
import s  from './MyPorts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {



    let postElements = props.posts.map (p => <Post id={p.id} message={p.message} LikesCount={p.LikesCount} />);

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div className={s.PostBlock}>
                    <textarea></textarea>
                </div>

                <div className={s.ButtonBlock}>
                    <button>add</button>
                </div>

            </div>
            {postElements}
        </div>
    );
};

export default MyPosts;