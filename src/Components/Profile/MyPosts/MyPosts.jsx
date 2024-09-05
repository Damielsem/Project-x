import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>add</button>
                </div>
                <Post message='Wow, Mclaren' LikesCount='34'/>
                <Post message='beauteful MCL34' LikesCount='67'/>
                <Post message='MClaren best' LikesCount='78'/>
            </div>
    );
};

export default MyPosts;