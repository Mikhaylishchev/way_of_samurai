import React from 'react';
import storeContext from '../../storeContext';
import { sendMessageCreator, updateNewMessageTextCreator } from '../redux/store';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

  
  return(

    <storeContext.Consumer> 
      
      {store => {

        let state = store.getState().dialogsPage;

        let changingNewMessage = (text) => {

          store.dispatch(updateNewMessageTextCreator(text)); 
        }

        let sendingNewMessage = () => {

          store.dispatch(sendMessageCreator())
        }

        return (
        
          <Dialogs updateNewMessageText={changingNewMessage} sendMessage={sendingNewMessage} dialogsPage={state} store={store}/>
        )
        
      }
    }
    
    </storeContext.Consumer>
  );
}


export default DialogsContainer;