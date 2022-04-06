import { usersAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {

    id: 22767,
    login: "Shady942",
    email: "shady942@gmail.com",
    isAuth: false
};

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

export const setAuthUserData = (id, login, email) => ({
    type: SET_USER_DATA,
    data: {
        id,
        login,
        email
    }
});

export const getAuth = () => {

    return (dispatch) => {

        usersAPI.getAuth()

            .then(response => {

                if(response.resultCode === 0) {

                    let {id, login, email} = response.data
                    dispatch(setAuthUserData(id, login, email));
                }
            });
    }
}

export default authReducer;