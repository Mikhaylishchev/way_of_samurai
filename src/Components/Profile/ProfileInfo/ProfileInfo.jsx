import React from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Spinner from '../../common/Spinner/Spinner'

const ProfileInfo = ({profile, status, updateStatus, login}) => {

  return (

    profile

      ? <div>

        <div className='profileWallpaper'>
          <img src="https://clck.ru/bNJgT" alt="wallpaper"></img>
        </div>

        {<div className={s.information}>
          <img className={s.profileInfoAvatar} alt="avatar" src={profile.photos.large || "https://clck.ru/b2h9v"}></img>

          <div className={s.about}>

            <ProfileStatusWithHooks status={status || profile.status} updateStatus={updateStatus} />
            <div className={s.name}>{profile.fullName || login}</div>
          </div>
        </div>}

      </div >

      : <Spinner />
  )
}

export default ProfileInfo;