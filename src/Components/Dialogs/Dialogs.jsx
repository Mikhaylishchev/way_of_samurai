/* eslint-disable jsx-a11y/alt-text */
// import s from './Dialogs.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Jack'},
    {id: 2, name: 'John'},
    {id: 3, name: 'James'},
    {id: 4, name: 'Michael'},
    {id: 5, name: 'Hugo'},
  ];

  let messages = [
    {id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id: 2, message: 'Lorem ipsum dolor sit amet.'},
    {id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
    {id: 4, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
    {id: 5, message: 'Lorem, ipsum dolor.'}, 
  ];

  let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />) 

  let messagesElements = messages.map(message => <Message key={message.id} text={message.message}/>)

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        
        {dialogsElements}
        
      </div>

      <div>

        {messagesElements}

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