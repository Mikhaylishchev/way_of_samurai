// import React from "react";
import { followAC, unfollowAC } from "../redux/usersReduser";
import Users from "./Users";
import {connect} from 'react-redux'
import setUsersAC from '../redux/usersReduser'

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users

    }
}

let mapDispatchToProps = (dispatch) => {

    return {

        follow: (userId) => {

            dispatch(followAC(userId))
        },

        unfollow: (userId) => {

            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {

            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);