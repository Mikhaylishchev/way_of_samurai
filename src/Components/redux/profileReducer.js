import { usersAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    
    posts: [
        
        {id: 2, message: 'Hi there! How r y\'all?', likesCount: 2},
        {id: 1, message: 'Its my first post!', likesCount: 1},
    ],

    newPostText: '',
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            github: "",
            instagram: "",
            mainLink: null,
            twitter: "",
            vk: "",
            website: null,
            youtube: null,
        },
        fullName: "",
        lookingForAJob: true,
        lookingForAJobDescription: "",
        photos: {
            large: "",
            small: ""
        },
        userId: 22767
    }
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_POST:  {

            let newPost = {

                id: state.posts[0].id + 1,
                message: state.newPostText,
                likesCount: 0
            }

            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        }

        case UPDATE_NEW_POST_TEXT:  {

            return {...state, newPostText: action.newText};
        }

        case SET_USER_PROFILE: {

            return {...state, profile: action.profile};
        }

        default:

            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
  
export const updateNewPostTextActionCreator = (text) => ({
      
      type: UPDATE_NEW_POST_TEXT,
      newText: text
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {

    return (dispatch) => {

        usersAPI.getUserProfile(userId)

            .then(response => {

                dispatch(setUserProfile(response));
            });
    }
}

export default profileReducer;
