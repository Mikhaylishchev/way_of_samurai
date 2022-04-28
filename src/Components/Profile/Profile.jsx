import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  window.scrollTo(0, 0)

  return (

    <div>

      <ProfileInfo {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>

      {props.isAuth && props.isOwner ? <MyPostsContainer avatar={props.profile.photos.large}/> : null}     
    </div>
  )
};

export default Profile;