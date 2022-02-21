import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 

  let messagesElements = props.state.letters.map(message => <MessageItem key={message.id} text={message.message}/>)

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