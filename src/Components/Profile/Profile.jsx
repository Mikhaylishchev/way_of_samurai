/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (

      <div>

        <ProfileInfo />

        <MyPosts posts={props.structure.posts} addPost={props.addPost}/>
      </div>
    )
}

export default Profile;