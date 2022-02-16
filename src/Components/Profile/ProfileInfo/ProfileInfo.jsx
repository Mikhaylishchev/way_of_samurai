/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {

    return (

      <div>

        <div className='profileWallpaper'>
          <img src="https://clck.ru/bNJgT"></img>
        </div>

        <div className={s.information}>
          avatar + info
        </div>
      </div>
    )
}

export default ProfileInfo;