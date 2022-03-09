import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  return (

    <div>

      <div className='profileWallpaper'>
        <img src="https://clck.ru/bNJgT" alt="wallpaper"></img>
      </div>

      {<div className={s.information}>
        <img className={s.profileInfoAvatar} alt="avatar" src={props.profile.photos.large || "https://clck.ru/b2h9v" }></img>
        <div className={s.about}>
          <div className={s.status}>"{props.profile.aboutMe}"</div>
          <div className={s.name}>{'Привет. Меня зовут ' + props.profile.fullName}.</div>
          <div className={s.contacts}>
            Вы можете связаться со мной:
            <div className={s.linksWrapper}>
              <a href={props.profile.contacts.facebook}><img className={s.socialItem} src="https://clck.ru/dYARE" alt="Facebook" /></a>
              <a href={props.profile.contacts.github}><img className={s.socialItem} src="https://clck.ru/dY9uS" alt="Github" /></a>
              <a href={props.profile.contacts.instagram}><img className={s.socialItem} src="https://clck.ru/dY9vF" alt="Instagram" /></a>
              <a href={props.profile.contacts.twitter}><img className={s.socialItem} src="https://clck.ru/dY9wG" alt="Twitter" /></a>
              <a href={props.profile.contacts.vk}><img className={s.socialItem} src="https://clck.ru/dY9yR" alt="VK" /></a>
            </div>
          </div>
          <div className={s.work}>Работа:
            <div>
              <div>{props.profile.lookingForAJob ? <div>Открыт к предложениям. </div> : <div>Не ищу работу.</div>}</div>
              <div className={s.workDescr}>{props.profile.lookingForAJobDescription}</div>
            </div>
          </div>
        </div>
      </div>}

    </div >
  )
}

export default ProfileInfo;