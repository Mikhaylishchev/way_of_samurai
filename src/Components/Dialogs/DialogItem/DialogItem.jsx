import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../Dialogs/Dialogs.module.css';

const DialogItem = (props) => {

  return(

    <div className={s.dialog}>
      <div className={s.dialogsWrapper}>
        
        <div className={s.avatar}>
          <img src={props.avatar || 'https://clck.ru/bVQbn'} alt="avatar" />
        </div>
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
      </div>
    </div>
  )
}

export default DialogItem;