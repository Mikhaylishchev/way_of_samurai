import React from "react";
import { setUsers, following, setCurrentPage, setUsersAmount, toggleIsFetching, toggleIsFollowingInProcess, getUsers,  } from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {

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
        isFollowingInProcess: state.usersPage.isFollowingInProcess
    }
}

export default connect(mapStateToProps, {

    following,
    setUsers,
    setCurrentPage,
    setUsersAmount,
    toggleIsFetching,
    toggleIsFollowingInProcess,
    getUsers

})(UsersContainer);
