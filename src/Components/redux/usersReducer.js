const FOLLOWING = 'FOLLOWING';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const CHANGING_PAGE = 'CHANGING-PAGE';
const SET_PAGES_AMOUNT = 'SET-PAGES-AMOUNT';

let initialState = {
    
    users: [],
    pageSize: 5,
    usersAmount: 0,
    currentPage: 1,
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
        default:

            return state;
        
    }
}

export const followingAC = (userId) => ({type: FOLLOWING, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});
export const changingPageAC = (pageNum) => ({type: CHANGING_PAGE, pageNum});
export const setUsersAmountAC = (totalCount) => ({type: SET_PAGES_AMOUNT, totalCount});

export default usersReducer;