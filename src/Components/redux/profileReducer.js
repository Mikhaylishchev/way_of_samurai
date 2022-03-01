const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    
    posts: [
        
        {id: 2, message: "Hi there! How r y'all?", likesCount: 2},
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

            // state.posts.unshift(newPost);
            // state.posts.unshift(newPost);

            stateCopy.posts = [...state.posts];
            stateCopy.posts.unshift(newPost);
            
            
            // state.newPostText = '';
            stateCopy.newPostText = '';

            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:  {

            let stateCopy = {...state};

            // state.newPostText = action.newText;

            stateCopy.newPostText = action.newText;

            return stateCopy;
        }

        default:

            return state;
        
    }
}

export default profileReducer;