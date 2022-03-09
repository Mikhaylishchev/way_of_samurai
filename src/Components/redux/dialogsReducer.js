const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    
    dialogs: [
        {id: 1, name: 'Jack', avatar: 'https://clck.ru/bVQVw'},
        {id: 2, name: 'John'},
        {id: 3, name: 'James', avatar: 'https://clck.ru/bVQVw'},
        {id: 4, name: 'Michael', avatar: 'https://clck.ru/bVQm7'},
        {id: 5, name: 'Kate', avatar: 'https://clck.ru/bVQmC'},
    ],

    letters: [
        {id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
        {id: 2, message: '4 8 15 16 23 42'},
        {id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
        {id: 4, message: 'WAAAAAAAAAAAAAAAAAAAAAAAAALT!!!!!!!!!!!!!!!!!1111111'},
        {id: 5, message: 'Lorem, ipsum dolor.'}, 
    ],

    newMessageText: ''
}


const dialogsReducer = (state = initialState, action) => {

    let stateCopy;
    
    switch(action.type) {
        
            case UPDATE_NEW_MESSAGE_TEXT: {

                return stateCopy = {

                    ...state,
                    newMessageText: action.text
                }
            }

            case SEND_MESSAGE:  {

                stateCopy = {

                    ...state,
                    messages: [state.messages],
                }

                let text = state.newMessageText;

                stateCopy.letters.push({
                    
                    id: stateCopy.letters[stateCopy.letters.length - 1].id + 1,
                    message: text
                });


                stateCopy.newMessageText = '';
                return stateCopy;
            }

            default:
                
                return state;
    }
}

export const updateNewMessageTextCreator = (text) => ({
      
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
});


export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;