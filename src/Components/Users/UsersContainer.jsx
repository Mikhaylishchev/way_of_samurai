import React from "react";
import { setUsers, following, setCurrentPage, setUsersAmount, toggleIsFetching } from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import * as axios from "axios";
import Spinner from "../common/Spinner/Spinner";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {

            withCredentials: true
        })

            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount);
            });
    }

    changingPage = (pageNum) => {

        this.props.setCurrentPage(pageNum);

        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`, {

            withCredentials: true
        })

            .then(response => {

                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUsersAmount(response.data.totalCount)
            });
    }

    render() {

        return <>

            {this.props.isFetching
            
            ? <Spinner />
            
            : <Users usersAmount={this.props.usersAmount} pageSize={this.props.pageSize} changingPage={this.changingPage} currentPage={this.props.currentPage} users={this.props.users} following={this.props.following}/>}
            
        </>
    }
}

let mapStateToProps = (state) => {

    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersAmount: state.usersPage.usersAmount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {

    following,
    setUsers,
    setCurrentPage,
    setUsersAmount,
    toggleIsFetching,

})(UsersContainer);