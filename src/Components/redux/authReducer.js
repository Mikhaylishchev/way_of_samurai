import { authAPI, securityAPI } from "../../api/api";
import {stopSubmit} from 'redux-form';
const SET_USER_DATA = 'SET-USER-DATA';
const GET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {id: null, email: null, login: null, isAuth: false, captchaUrl: null};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
        case GET_CAPTCHA_URL:

            return {

                ...state,
                ...action.data,
            }

        default:

            return state;
    }
}

export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email,
        isAuth
    }
});

export const getCaptchaUrlAC = (captchaUrl) => ({

    type: GET_CAPTCHA_URL,
    data: {

        captchaUrl
    }
});

export const getAuthData = () => {

    return async (dispatch) => {

        let response =  await authAPI.me()

        if(response.resultCode === 0) {

            let {id, login, email} = response.data
            dispatch(setAuthUserData(id, login, email, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {

    return async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe, captcha)

            if(response.data.resultCode === 0) {

                dispatch(getAuthData());
                dispatch(getCaptchaUrlAC());

            } else {

                dispatch(stopSubmit('login', {_error: response.data.messages || 'Something wrong.'}));  // AC позволяющий в случае несрабатывания формы отобразить ошибку

                if(response.data.resultCode === 10) {

                    dispatch(getCaptchaUrl())
                }
            }
    }
}

export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.getCapcthaUrl();

    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlAC(captchaUrl));
}


export const logout = () => {

    return async (dispatch) => {

        let response = await authAPI.logout()

            if(response.data.resultCode === 0) {

                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}

export default authReducer;