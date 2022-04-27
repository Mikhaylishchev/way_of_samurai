import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import Spinner from '../../common/Spinner/Spinner'
import { NavLink } from 'react-router-dom';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, login, isOwner, savePhoto, isAuth, updateProfile }) => {

  let [editMode, setEditMode] = useState(false);

  const mainPhotoSelect = (event) => {

    if (event.target.files.length > 0) {

      savePhoto(event.target.files[0])
    }
  }

  const onSubmit = async (formData) => {

    updateProfile(formData)

    .then(() => setEditMode(false))

      
  }

  console.log(profile)

  return (

    profile

      ? <div>

        <div className='profileWallpaper'>
          {login ? <img src="https://clck.ru/bNJgT" alt="wallpaper"></img> : null}
        </div>

        {<div className={s.information}>
          <div className={s.avatar}>
            <img className={s.profileInfoAvatar} alt="" src={profile.photos.large || "https://clck.ru/b2h9v"}></img>
            {isOwner && isAuth ? <div className={s.avatarButtonWrapper}>
              <input type="file" onChange={mainPhotoSelect}></input>
              <img src="https://clck.ru/geZUF" alt="img"></img></div> : null}
          </div>

          <div className={s.about}>

            <ProfileStatusWithHooks status={status || profile.status} updateStatus={updateStatus} />
            <div className={s.name}>{profile.fullName || login}</div>

            {editMode
              ? <ProfileDataForm initialValues={profile} isOwner={isOwner} onSubmit={onSubmit} profile={profile}/> // initialValues перезает значения  из profile в Field
              : <ProfileData  goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>
            }

          </div>
        </div>}

      </div >

      : <Spinner />
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}

      <div><b>About me: </b>{profile.aboutMe}</div>

      <div><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</div>

      <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>

      <div><b>contacts:</b> {Object.keys(profile.contacts).map(key => {

      

    return isOwner
        ? <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        : profile.contacts[key] ? <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : null
    })}</div>
    </div>
  )
}



export const Contact = ({ contactTitle, contactValue }) => {

  return contactValue ? <div className={s.contact}><b>{contactTitle}: </b> <NavLink className={s.contactLink} to={contactValue}>{contactValue}</NavLink></div> : <div className={s.contact}><b>{contactTitle}: </b> </div>
}

export default ProfileInfo;