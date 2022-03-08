import React from "react";
import s from './Users.module.css';

let Users = (props) => {

    let pagesAmount = Math.ceil(props.usersAmount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesAmount; i++) {

        pages.push(i);
    }

    return (<div>

        {
            
            props.users.map(user => <div key={`${user.id}`}>

                <div className={s.friendsWrapper}>
                    <span>

                        <div>
                            <img className={s.avatar} src={user.photos.small || 'https://clck.ru/b2h9v'} alt='avatar'></img>
                        </div>

                        <div>
                            {<button onClick={() => { props.following(user.id) }}>{user.followed ? 'Unfollow' : 'Follow'}</button>}
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

            {pages.map((page, i) => {

                return <span key={i} className={props.currentPage === page ? s.selectedPageNum : s.pageNum} onClick={(event) => {props.changingPage(page)}}>{page}</span>
            })}

        </div>
        
    </div>)
}

export default Users;