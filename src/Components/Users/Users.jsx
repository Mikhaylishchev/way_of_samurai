import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')

                .then(response => {

                    props.setUsers(response.data.items)
                })
        }
    }

    return <div>

        <button onClick={getUsers}>Get Users</button>

        {

            props.users.map(user => <div key={`${user.id}/* ${user.name} */`}>

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
                        <div>{'country'}, {'state'}, {'city'}</div>
                        <div>{user.status}</div>
                    </span>

                </div>
            </div>)

        }
        
    </div>
}

export default Users;