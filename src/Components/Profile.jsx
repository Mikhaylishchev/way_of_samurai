/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Profile.module.css';

const Profile = () => {

    return (

      <div className="content">
          <img src="https://clck.ru/b4sKL"></img>
          <div>
            avatar + info
          </div>
          <div>
            posts
            <div>
              new post
            </div>
            <div className={s.item}>post-1</div>
            <div className={s.item}>post-2</div>
            <div className={s.item}>post-3</div>
          </div>
        </div>
    )
}

export default Profile;