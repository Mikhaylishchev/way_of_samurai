import { sendMessageCreator, updateNewMessageTextCreator } from '../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  
  return {

    dialogsPage: state.dialogsPage,
    
  }
}




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

export default compose(

  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Dialogs)