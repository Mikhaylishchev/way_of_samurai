/* eslint-disable jsx-a11y/alt-text */
// import s from './Dialogs.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/messages/1">Jack</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/messages/2">John</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/messages/3">James</NavLink>
        </div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className={s.message}>Lorem ipsum dolor sit amet.</div>
        <div className={s.message}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.</div>
      </div>
      
    </div>
  )
}

export default Dialogs;