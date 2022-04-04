import React from "react";
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from "axios";

let Users = (props) => {

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
                            {<button onClick={() => {

                                
                                if(user.followed) {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {

                                        withCredentials: true,
                                        headers: {

                                            "API-KEY": "bd85f85d-7cdf-4bb1-ae2f-bb1be42fe32f"
                                        }
                                    })

                                        .then(response => {
                                            console.log(response);
                                            
                                            if(response.data.resultCode === 0) {

                                                props.following(user.id);
                                            }
                                            
                                        });

                                } else {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {

                                    withCredentials: true,
                                    headers: {

                                        "API-KEY": "bd85f85d-7cdf-4bb1-ae2f-bb1be42fe32f"
                                    }
                                })

                                    .then(response => {
                                        console.log(response);
                                        
                                        if(response.data.resultCode === 0) {

                                            props.following(user.id);
                                        }
                                        
                                    });
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