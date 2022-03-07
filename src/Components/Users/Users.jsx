import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

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

        let pagesAmount = Math.ceil(this.props.usersAmount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesAmount; i++) {

            pages.push(i);
        }


        return <div>

            {

                this.props.users.map(user => <div key={`${user.id}`}>

                    <div className={s.friendsWrapper}>
                        <span>

                            <div>
                                <img className={s.avatar} src={user.photos.small || 'https://clck.ru/b2h9v'} alt='avatar'></img>
                            </div>

                            <div>
                                {<button onClick={() => { this.props.following(user.id) }}>{user.followed ? 'Unfollow' : 'Follow'}</button>}
                            </div>
                        </span>

                        <span className={s.information}>
                            <div>{`${user.name}`}</div>
                            <div>{'country'}, {'state'}, {user.id}, {'city'}</div>
                            <div>{user.status}</div>
                        </span>

                    </div>
                </div>)

            }

            <div className={s.pagesNums}>

                {pages.map(page => {

                    return <span className={this.props.currentPage === page ? s.selectedPageNum : s.pageNum} onClick={(event) => {this.changingPage(page)}}>{page}</span>
                })}

            </div>
        </div>
    }
}

export default Users;