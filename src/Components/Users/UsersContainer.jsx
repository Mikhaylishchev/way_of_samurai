import React from "react";
import { setUsers, following, setCurrentPage, setUsersAmount, toggleIsFetching, toggleIsFollowingInProcess,  } from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Spinner from "../common/Spinner/Spinner";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)

            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.items);
                this.props.setUsersAmount(response.totalCount);
            });
    }

    changingPage = (pageNum) => {

        this.props.setCurrentPage(pageNum);

        this.props.toggleIsFetching(true);

        usersAPI.changingPage(pageNum, this.props.pageSize)

            .then(response => {

                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount)
                this.props.toggleIsFetching(false);
            });
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

})(UsersContainer);

