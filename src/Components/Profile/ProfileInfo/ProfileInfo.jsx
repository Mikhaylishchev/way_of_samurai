import React from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Spinner from '../../common/Spinner/Spinner'

const ProfileInfo = ({profile, status, updateStatus, login, isOwner, savePhoto, isAuth}) => {

  const mainPhotoSelect = (event) => {

    // event.preventDefaul()

    if(event.target.files.length > 0) {

      savePhoto(event.target.files[0])
    }
  }

  return (

    profile

      ? <div>

        <div className='profileWallpaper'>
          <img src="https://clck.ru/bNJgT" alt="wallpaper"></img>
        </div>

        {<div className={s.information}>
          <div className={s.avatar}>
            <img className={s.profileInfoAvatar} alt="avatar" src={profile.photos.large || "https://clck.ru/b2h9v"}></img>
            {isOwner && isAuth ? <div className={s.avatarButtonWrapper}><input type="file" onChange={mainPhotoSelect}></input><img src="https://clck.ru/geBzq" alt="avatar"></img></div> : null}
          </div>

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