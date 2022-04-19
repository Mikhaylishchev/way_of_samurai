import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import Spinner from '../../common/Spinner/Spinner'

const ProfileInfo = (props) => {

  return (

    props.profile

      ? <div>

        <div className='profileWallpaper'>
          <img src="https://clck.ru/bNJgT" alt="wallpaper"></img>
        </div>

        {<div className={s.information}>
          <img className={s.profileInfoAvatar} alt="avatar" src={props.profile.photos.large || "https://clck.ru/b2h9v"}></img>

          <div className={s.about}>

            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            <div className={s.name}>{props.profile.fullName || props.login}</div>
          </div>
        </div>}

      </div >

      : <Spinner />
  )
}

export default ProfileInfo;