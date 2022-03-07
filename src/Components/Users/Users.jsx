import React from "react";
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {

    if(props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        
        .then(response => {
            
            props.setUsers(response.data.items)
        })

        /* props.setUsers( [
        
            {id: 1, followed: false, avavtarUrl: 'https://clck.ru/bVQVw', firstName: 'Jack', lastName: 'Shepard', status: 'Lorem ipsum dolor sit amet.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
            {id: 2, followed: true, avavtarUrl: 'https://clck.ru/dW87U', firstName: 'John', lastName: 'Locke', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
            {id: 3, followed: true, avavtarUrl: 'https://clck.ru/bYqmB', firstName: 'James', lastName: 'Ford', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquid!', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
        ]) */

    }

    return props.users.map(user => <div key={`${user.id}/* ${user.name} */`}>
        
        <div className={s.friendsWrapper}>
            <span>

                <div>
                    <img className={s.avatar} src={user.photos.small || 'https://clck.ru/b2h9v'} alt='avatar'></img>
                </div>

                <div>
                    {<button onClick={() => {props.following(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>}
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

export default Users;