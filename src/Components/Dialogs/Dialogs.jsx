import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {

  let dialogsElements = props.structure.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar}/>) 

  let messagesElements = props.structure.letters.map(message => <MessageItem key={message.id} text={message.message}/>)


  /* let writeMessage = React.createRef();

  const writing = () => {

    let text = writeMessage.current.value;

    alert(text);
  } */

  return(

    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        
        {dialogsElements}
        
      </div>

      <div>

        {messagesElements}

        {/* <div>

          <div><textarea ref={writeMessage}></textarea></div>

          <button onClick={writing}>Send!</button>
        </div> */}
        
      </div>      

      
    </div>
  )
}


export default Dialogs;