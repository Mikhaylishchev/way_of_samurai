import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { Navigate } from 'react-router-dom';

const Profile = (props) => {

  console.log(props)

  return (

    props.isAuth

      ? <div>

          <ProfileInfo profile={props.profile} />

          <MyPostsContainer />

        </div>

      : <Navigate to='/login' />
    )
}

export default Profile;