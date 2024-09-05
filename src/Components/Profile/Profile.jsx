import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8o8mNuhv11hvAPurlCLoNOycZ_CP4a6WEPw&s'/>
            <div>
                ava
            </div >
            <MyPosts />
        </div>
    )
}

export default Profile;