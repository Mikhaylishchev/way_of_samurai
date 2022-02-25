/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import RandomFriends from '../Friends/RandomFriends/RandomFriends';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
      
      <div>

        <ProfileInfo />

        <MyPostsContainer store={props.store}/>
        
      </div>
    )
}

export default Profile;