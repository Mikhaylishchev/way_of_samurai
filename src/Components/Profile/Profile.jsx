/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import RandomFriends from '../Friends/RandomFriends/RandomFriends';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
      
      <div>

        <ProfileInfo />

        <MyPosts /* posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} */ profilePage={props.profilePage} dispatch={props.dispatch}/>


      </div>
    )
}

export default Profile;