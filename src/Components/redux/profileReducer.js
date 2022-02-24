const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    /* if(action.type === ADD_POST) {

        let newPost = {
            id: state.posts[0].id + 1,
            message: state.newPostText,
            likesCount: 0
        }
    
        state.posts.unshift(newPost);
        state.newPostText = '';

    } else if(action.type === UPDATE_NEW_POST_TEXT) {

        state.newPostText = action.newText;
    } 

    return state; */

    switch (action.type) {
        
        case ADD_POST:

            let newPost = {
                id: state.posts[0].id + 1,
                message: state.newPostText,
                likesCount: 0
            }

            state.posts.unshift(newPost);
            state.newPostText = '';

            return state;

        case UPDATE_NEW_POST_TEXT:

            state.newPostText = action.newText;

            return state;

        default:

            return state;
    }
}

export default profileReducer;