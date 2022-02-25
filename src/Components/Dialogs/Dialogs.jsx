import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { updateNewMessageTextCreator } from '../redux/store';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 

  let messagesElements = state.letters.map(message => <MessageItem key={message.id} text={message.message}/>)

  let newMessageText = state.newMessageText;

  let changingNewMessage = (event) => {

    let text = event.target.value;
    props.store.dispatch(updateNewMessageTextCreator(text))
  }

  let sendingNewMessage = () => {

    props.sendMessage();
  }

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        
        {dialogsElements}
        
      </div>

      <div>

        {messagesElements}
        
        <div>

          <div><textarea value={newMessageText} onChange={changingNewMessage} placeholder="Enter your message"></textarea></div>

          <div><button onClick={sendingNewMessage}>Send</button></div>
        </div>

      </div>      

    </div>
  )
}


export default Dialogs;