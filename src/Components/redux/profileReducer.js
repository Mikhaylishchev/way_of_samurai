import { profileAPI } from "../../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


let initialState = {
    
    posts: [
        
        {id: 2, message: 'Hi there! How r y\'all?', likesCount: 2},
        {id: 1, message: 'Its my first post!', likesCount: 1},
    ],

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
        lookingForAJob: false,
        lookingForAJobDescription: "",
        photos: {
            large: "",
            small: ""
        },
        
        userId: 22767
    },

    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_POST:  {

            let newPost = {

                id: state.posts[0].id + 1,
                message: action.newPostText,
                likesCount: 0
            }

            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        }
        
        case DELETE_POST:  {

            return {...state, posts: state.posts.filter(p => p.id !== action.postId)};
        }

        case SET_USER_PROFILE: {

            return {...state, profile: action.profile};
        }

        case SET_STATUS: {

            return {...state, status: action.status}
        }

        default:

            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => {

    return (dispatch) => {

        profileAPI.getUserProfile(userId)

            .then(response => {

                dispatch(setUserProfile(response));
            });
    }
}

export const getStatus = (userId) => {

    return (dispatch) => {

        profileAPI.getStatus(userId)

            .then(response => {

                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {

    return (dispatch) => {

        profileAPI.updateStatus(status)

            .then(response => {

                if(response.data.resultCode === 0){
                                
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer;
