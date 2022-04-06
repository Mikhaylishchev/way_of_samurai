import { sendMessageCreator, updateNewMessageTextCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  
  return {

    dialogsPage: state.dialogsPage,
    
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);    //    hoc

let mapDispatchToProps = (dispatch) => {
  
  return {

    updateNewMessageText: (text) => {

      dispatch(updateNewMessageTextCreator(text));
    },

    sendMessage: () => {

      dispatch(sendMessageCreator());
    }
  }
}



const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;