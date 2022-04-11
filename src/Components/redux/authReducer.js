import { authAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {userId: null, email: null, login: null, isAuth: false};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: 

            return {

                ...state,
                ...action.data,
                isAuth: true
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

export const getAuthData = () => {

    return (dispatch) => {

        authAPI.me()

            .then(response => {

                if(response.resultCode === 0) {

                    let {id, login, email} = response.data
                    dispatch(setAuthUserData(id, login, email, true));
                }
            });
    }
}

export const login = (email, password, rememberMe) => {

    return (dispatch) => {

        authAPI.login(email, password, rememberMe)

            .then(response => {

                if(response.resultCode === 0) {

                    dispatch(getAuthData())
                }
            });
    }
}

export const logout = () => {

    return (dispatch) => {

        authAPI.logout()

            .then(response => {

                if(response.resultCode === 0) {

                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    }
}


export default authReducer;