const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
    posts: [
        
        {id: 2, message: 'Hi there! How r y\'all?', likesCount: 2},
        {id: 1, message: 'Its my first post!', likesCount: 1},
    ],

    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_POST:  {

            let newPost = {

                id: state.posts[0].id + 1,
                message: state.newPostText,
                likesCount: 0
            }

            let stateCopy = {...state};

            stateCopy.posts = [newPost, ...state.posts];            
            
            stateCopy.newPostText = '';

            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:  {

            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;

            return stateCopy;
        }

        default:

            return state;
        
    }
}

export default profileReducer;