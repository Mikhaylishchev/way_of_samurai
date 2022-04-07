import React from "react";
import { setUsers, following, setCurrentPage, setUsersAmount, toggleIsFetching, toggleIsFollowingInProcess, getUsers, unfollow, follow,  } from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {

        console.log(this.props)

        this.props.getUsers(this.props.currentPage, this.props.pageSize)        //      getUsers-thunk
    }

    changingPage = (pageNum, pageSize) => {

        this.props.getUsers(pageNum, this.props.pageSize)        //      getUsers-thunk
    }

    render() {

        return <>

            {this.props.isFetching
            
            ? <Spinner />
            
            : <Users
                usersAmount={this.props.usersAmount}
                pageSize={this.props.pageSize}
                changingPage={this.changingPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                following={this.props.following}
                isFollowingInProcess={this.props.isFollowingInProcess}
                toggleIsFollowingInProcess={this.props.toggleIsFollowingInProcess}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isAuth={this.props.isAuth}
            />} 
            
        </>
    }
}

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersAmount: state.usersPage.usersAmount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProcess: state.usersPage.isFollowingInProcess,
        isAuth: state.auth.isAuth
    }
}

export default compose(connect(mapStateToProps, {

    following,
    setUsers,
    setCurrentPage,
    setUsersAmount,
    toggleIsFetching,
    toggleIsFollowingInProcess,
    getUsers,
    follow,
    unfollow

}))(UsersContainer)