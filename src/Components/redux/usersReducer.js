import { usersAPI } from "../../api/api";

const FOLLOWING = 'FOLLOWING';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CHANGING_PAGE = 'CHANGING-PAGE';
const SET_PAGES_AMOUNT = 'SET-PAGES-AMOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROCESS = 'TOGGLE-IS-FOLLOWING-IN-PROCESS';

let initialState = {
    
    users: [],
    pageSize: 5,
    usersAmount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProcess: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case FOLLOWING:

            return {...state, users: state.users.map(user => {

                if(user.id === action.userId) {

                    return {...user, followed: !user.followed};
                }

                return user;
            })}

        case SET_USERS:

            return {...state, users: [...action.users]};

        case SET_CURRENT_PAGE:

            return {...state, currentPage: action.pageNum};

        case SET_PAGES_AMOUNT:

            return {...state, usersAmount: action.totalCount}
        
        case TOGGLE_IS_FETCHING:

            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_IN_PROCESS:

            return {...state, isFollowingInProcess: action.isFollowingInProcess
                
                ? [...state.isFollowingInProcess, action.userId]
                : state.isFollowingInProcess.filter(id => id !== action.userId)
            }

        default:

            return state;
    }
}

export const following = (userId) => ({type: FOLLOWING, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});
export const changingPage = (pageNum) => ({type: CHANGING_PAGE, pageNum});
export const setUsersAmount = (totalCount) => ({type: SET_PAGES_AMOUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProcess = (isFollowingInProcess, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROCESS, isFollowingInProcess, userId});

export const getUsers = (currentPage, pageSize) => {
    
    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)

            .then(response => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setUsersAmount(response.totalCount));
                dispatch(setCurrentPage(currentPage));
            })
    };
}

export const follow = (user) => {

    return(dispatch) => {

        dispatch(toggleIsFollowingInProcess(true, user.id))

        usersAPI.following(user)

            .then(response => {if(response.data.resultCode === 0) {

                dispatch(following(user.id))
                dispatch(toggleIsFollowingInProcess(false, user.id))
            }})
    }
}
export const unfollow = (user) => {

    return(dispatch) => {

        dispatch(toggleIsFollowingInProcess(true, user.id))

        usersAPI.unfollowing(user)

            .then(response => {if(response.data.resultCode === 0) {

                dispatch(following(user.id))
                dispatch(toggleIsFollowingInProcess(false, user.id))
            }})
    }
}

export default usersReducer;