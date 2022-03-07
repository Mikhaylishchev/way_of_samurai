import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendssReducer'
import usersReducer from './usersReducer';

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;