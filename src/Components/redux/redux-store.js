import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import friendsReducer from './friendssReducer'

let reducers = combineReducers({

    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer

});

let store = createStore(reducers);

export default store;