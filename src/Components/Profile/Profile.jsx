import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  console.log(props)

  return (

    <div>

      <ProfileInfo {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>

      {props.isAuth && props.isOwner ? <MyPostsContainer avatar={props.profile.photos.large}/> : null}      
    </div>

  )
};

export default Profile;