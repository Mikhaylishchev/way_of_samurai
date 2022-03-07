// import React from "react";
import { setUsersAC, followingAC } from "../redux/usersReducer";
import Users from "./Users";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users

    }
}

let mapDispatchToProps = (dispatch) => {

    return {

        following: (userId) => {

            dispatch(followingAC(userId));
        },

        setUsers: (users) => {

            dispatch(setUsersAC(users));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);