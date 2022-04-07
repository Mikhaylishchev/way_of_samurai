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
          <ProfileStatus status={'asdasd'}/>
          {/* {props.profile.aboutMe ? <div className={s.status}>"{props.profile.aboutMe}"</div> : null}
          <div className={s.name}>{props.profile.fullName}</div>
          <div className={s.contacts}>

          </div> */}
        </div>
      </div>}

    </div >
  )
}

export default ProfileInfo;