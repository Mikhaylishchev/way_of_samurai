import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

  return (

    <div>

      <div className='profileWallpaper'>
        <img src="https://clck.ru/bNJgT" alt="wallpaper"></img>
      </div>

      {<div className={s.information}>
        <img className={s.profileInfoAvatar} alt="avatar" src={props.profile.photos.large || "https://clck.ru/b2h9v" }></img>
        
        <div className={s.about}>
          {props.profile.aboutMe ? <ProfileStatus status={props.profile.aboutMe}/> : null}
          <div className={s.name}>{props.profile.fullName}</div>

        </div>
      </div>}

    </div >
  )
}

export default ProfileInfo;