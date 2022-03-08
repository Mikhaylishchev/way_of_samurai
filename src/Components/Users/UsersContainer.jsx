import React from "react";
import { setUsersAC, followingAC, setCurrentPageAC, setUsersAmountAC } from "../redux/usersReducer";
import {connect} from 'react-redux'
import Users from "./Users";
import * as axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)

            .then(response => {

                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount);
            });
    }

    changingPage = (pageNum) => {

        this.props.setCurrentPage(pageNum);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)

            .then(response => {

                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount)
            });
    }

    render() {

        return <Users usersAmount={this.props.usersAmount} pageSize={this.props.pageSize} changingPage={this.changingPage} currentPage={this.props.currentPage} users={this.props.users} following={this.props.following}/>
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);