import React from "react";
import { setUsers, following, setCurrentPage, setUsersAmount, toggleIsFetching, toggleIsFollowingInProcess, usersRequest, unfollow, follow,  } from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import { compose } from "redux";
import { getUsers, getPageSizeSelector, getUsersAmountSelector, getCurrentPageSelector, getIsFetchingSelector, getIsFollowingInProcessSelector, getIsAuthSelector } from "../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.usersRequest(this.props.currentPage, this.props.pageSize)        //      getUsers-thunk
    }

    changingPage = (pageNum, pageSize) => {

        this.props.usersRequest(pageNum, this.props.pageSize)        //      getUsers-thunk
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

        users: getUsers(state),
        pageSize: getPageSizeSelector(state),
        usersAmount: getUsersAmountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFollowingInProcess: getIsFollowingInProcessSelector(state),
        isAuth: getIsAuthSelector(state)
    }
}

export default compose(connect(mapStateToProps, {

    following,
    setUsers,
    setCurrentPage,
    setUsersAmount,
    toggleIsFetching,
    toggleIsFollowingInProcess,
    usersRequest,
    follow,
    unfollow

}))(UsersContainer);

