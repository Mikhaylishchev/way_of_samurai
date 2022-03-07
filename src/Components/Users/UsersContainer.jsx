// import React from "react";
import { setUsersAC, followingAC, setCurrentPageAC, setUsersAmountAC } from "../redux/usersReducer";
import Users from "./Users";
import {connect} from 'react-redux'

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersAmount: state.usersPage.usersAmount,
        currentPage: state.usersPage.currentPage
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

        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum));
        },

        setUsersAmount: (totalCount) => {
            dispatch(setUsersAmountAC(totalCount));
        }

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);