/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {

    return (

      <div className={s.content}>
          <img src="https://clck.ru/b4sKL"></img>
          <div>
            avatar + info
          </div>
          
          <MyPosts />
      </div>
    )
}

export default Profile;