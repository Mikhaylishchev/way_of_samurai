import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../../Dialogs/Dialogs.module.css';

const DialogItem = (props) => {

  return(

    <div className={s.dialog}>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;