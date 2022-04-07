import React from "react";
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    console.log(props)

    let pagesAmount = Math.ceil(props.usersAmount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {

        pages.push(i);
    }

    return (

    <div>

        <div className={s.pagesNums}>

            {pages.map((page, i) => {

                return <span key={i} className={props.currentPage === page ? s.selectedPageNum : s.pageNum} onClick={(event) => {props.changingPage(page)}}>{page}</span>
            })}

        </div>

        {
            
            props.users.map(user => <div key={`${user.id}`}>

                <div className={s.friendsWrapper}>
                    <span>
                        <div>

                        <NavLink to={`/profile/${user.id}`}>
                            <img className={s.avatar} src={user.photos.small || 'https://clck.ru/b2h9v'} alt='avatar'></img>
                        </NavLink>

                        </div>

                        <div>
                            {<button disabled={props.isAuth ? props.isFollowingInProcess.some(id => id === user.id) : true} onClick={() => {
                                
                                if (user.followed) {

                                    props.unfollow(user);        //      unfollow-thunk
                                    
                                } else {

                                    props.follow(user);        //      follow-thunk
                                }

                            }}>{user.followed ? 'Unfollow' : 'Follow'}</button>}
                            
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
        
    </div>)
}

export default Users;