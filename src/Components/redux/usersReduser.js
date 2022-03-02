const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    
    users: [
        
        {id: 1, followed: false, avavtarUrl: 'https://clck.ru/bVQVw', firstName: 'Jack', lastName: 'Shepard', status: 'Lorem ipsum dolor sit amet.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
        {id: 2, followed: true, avavtarUrl: 'https://clck.ru/dW87U', firstName: 'John', lastName: 'Locke', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
        {id: 3, followed: true, avavtarUrl: 'https://clck.ru/bYqmB', firstName: 'James', lastName: 'Ford', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquid!', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
    ],

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case FOLLOW:

            return {...state, users: state.users.map(user => {

                if(user.id === action.userId) {

                    return {...user, followed: true};
                }

                return user;
            })}

        case UNFOLLOW:

            return {...state, users: state.users.map(user => {

                if(user.id === action.userId) {

                    return {...user, followed: false};
                }

                return user;
            })}

        case SET_USERS:

        return {...state, users: [...state.users, ...action.users]}

        default:

            return state;
        
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;