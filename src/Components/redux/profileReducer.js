import { profileAPI } from "../../api/api";
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const SAVE_PROFILE = 'SAVE-PROFILE';

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
        }        
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

        case SAVE_PHOTO_SUCCESS: {

            return {...state, profile: {...state.profile, photos: action.photos}}
        }

        default:

            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type: SET_STATUS, status});

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const saveProfileSuccess = (profile) => ({type: SAVE_PROFILE, profile});


export const getUserProfile = (userId) => {

    return async (dispatch) => {

        let response = await profileAPI.getUserProfile(userId)

        dispatch(setUserProfile(response));
    }
}

export const getStatus = (userId) => {

    return async (dispatch) => {

        let response = await profileAPI.getStatus(userId)

        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) => {

    return async (dispatch) => {

        let response = await profileAPI.updateStatus(status)

            if(response.data.resultCode === 0){
                            
                dispatch(setStatus(status))
            }
    }
}

export const savePhoto = (file) => async (dispatch) => {

    let response = await profileAPI.savePhoto(file)

    if(response.data.resultCode === 0)

    dispatch(savePhotoSuccess(response.data.data.photos));
}

export const updateProfile = (profile) => async (dispatch, getState) => {

    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);

        if(response.data.resultCode === 0){
            
            dispatch(saveProfileSuccess(response.data));
            dispatch(getUserProfile(userId))
        } else {

            dispatch(stopSubmit('profileEdit', {_error: response.data.messages[0] || 'Something wrong.'}));

            // dispatch(stopSubmit('profileEdit', {'contacts': {'facebook': response.data.messages[0]}}));
            // dispatch(stopSubmit('profileEdit', {'aboutMe': response.data.messages[0]}));

            return Promise.reject(response.data.messages[0]);
        }
}

export default profileReducer;


