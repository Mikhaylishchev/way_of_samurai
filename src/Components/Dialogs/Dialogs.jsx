/* eslint-disable jsx-a11y/alt-text */
// import s from './Dialogs.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        

        <DialogItem name="James" id='1' />
        <DialogItem name="John" id='2' />
        <DialogItem name="Jack" id='3' />
        <DialogItem name="WALT" id='4' />
      </div>

      <div className={s.message}>
        <Message text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
        <Message text="Lorem ipsum dolor sit amet."/>
        <Message text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis."/>
        <Message text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis."/>
      </div>

      
    </div>
  )
}

const DialogItem = (props) => {

  return(

    <div className={s.dialog}>
      <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {

  return(

    <div className={s.message}>{props.text}</div>
  )
}

export default Dialogs;