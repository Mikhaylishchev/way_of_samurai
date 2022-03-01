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

    
    switch(action.type) {
        
            case UPDATE_NEW_MESSAGE_TEXT: {

                let stateCopy = {...state}

                // state.newMessageText = action.text;

                stateCopy.newMessageText = action.text;

                return stateCopy;
            }

            case SEND_MESSAGE:  {

                let text = state.newMessageText;
            
                /* state.newMessageText = '';
                state.letters.push({
                    
                    id: state.letters[state.letters.length - 1].id + 1,
                    message: text
                }); */

                let stateCopy = {...state};

                stateCopy.letters = [...state.letters];

                stateCopy.letters.push({
                    
                    id: stateCopy.letters[stateCopy.letters.length - 1].id + 1,
                    message: text
                });

                return stateCopy;
            }
            default:
                
                return state;
    }

        
}

    


export default dialogsReducer;