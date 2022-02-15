import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {

  let dialogsArr = [
    {id: 1, name: 'Jack'},
    {id: 2, name: 'John'},
    {id: 3, name: 'James'},
    {id: 4, name: 'Michael'},
    {id: 5, name: 'Kate'},
  ];

  let messagesArr = [
    {id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
    {id: 2, message: '4 8 15 16 23 42'},
    {id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
    {id: 4, message: 'WAAAAAAAAAAAAAAAAAAAAAAAAALT!!!!!!!!!!!!!!!!!1111111'},
    {id: 5, message: 'Lorem, ipsum dolor.'}, 
  ];

  let dialogsElements = dialogsArr.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />) 

  let messagesElements = messagesArr.map(message => <MessageItem key={message.id} text={message.message}/>)

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


export default Dialogs;