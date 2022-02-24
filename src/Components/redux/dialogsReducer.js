const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {


    switch(action.type) {
        
            case UPDATE_NEW_MESSAGE_TEXT:

                state.newMessageText = action.text;

                return state;

            case SEND_MESSAGE:

                let text = state.newMessageText;
            
                state.newMessageText = '';
                state.letters.push({
                    
                    id: state.letters[state.letters.length - 1].id + 1,
                    message: text
                });

                return state;
            
            default:
                
                return state;
    }

        
}

    


export default dialogsReducer;