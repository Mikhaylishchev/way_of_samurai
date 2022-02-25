import React from 'react';
// import s from './Dialogs.module.css';
// import DialogItem from './DialogItem/DialogItem';
// import MessageItem from './MessageItem/MessageItem';
import { sendMessageCreator, updateNewMessageTextCreator } from '../redux/store';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  /* let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 

  let messagesElements = state.letters.map(message => <MessageItem key={message.id} text={message.message}/>)

  let newMessageText = state.newMessageText; */

  let changingNewMessage = (text) => {

    // let text = event.target.value;

    // props.updateNewMessageText(text);

    props.store.dispatch(updateNewMessageTextCreator(text)); 
  }

  let sendingNewMessage = () => {

    props.store.dispatch(sendMessageCreator())
  }

  return(

    <Dialogs updateNewMessageText={changingNewMessage} sendMessage={sendingNewMessage} dialogsPage={state} store={props.store}/>
  )
}


export default DialogsContainer;