import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthCrerator, requiredField } from '../../utils/validators/validators';

const maxLength10 = maxLengthCrerator(10);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)

  let messagesElements = state.letters.map(message => <MessageItem key={message.id} text={message.message} />)


  const addNewMessage = (values) => {

    props.sendMessage(values.newMessageText)
  }

  return (

    props.isAuth ?

      <div className={s.dialogs}>
        <div className={s.dialogsItems}>

          {dialogsElements}

        </div>

        <div>

          {messagesElements}

          <ReduxSendingNewMessageForm onSubmit={addNewMessage}/>

        </div>

      </div>

      : <Navigate to='/login' />
  )
}

const SendingNewMessageForm = (props) => {

  return (

    <form onSubmit={props.handleSubmit}>

      <div><Field validate={[requiredField, maxLength10]} component={Textarea} name="newMessageText" placeholder="Enter your message" /></div>
      <div><button>Send</button></div>
    </form>
  )
}

const ReduxSendingNewMessageForm = reduxForm({ form: 'dialogsSendingNewMessageForm' })(SendingNewMessageForm)
export default Dialogs;