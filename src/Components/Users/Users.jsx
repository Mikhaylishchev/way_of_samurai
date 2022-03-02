import React from "react";
import s from './Users.module.css';

const Users = (props) => {

    if(props.users.length === 0) {

        props.setUsers( [
        
            {id: 1, followed: false, avavtarUrl: 'https://clck.ru/bVQVw', firstName: 'Jack', lastName: 'Shepard', status: 'Lorem ipsum dolor sit amet.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
            {id: 2, followed: true, avavtarUrl: 'https://clck.ru/dW87U', firstName: 'John', lastName: 'Locke', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
            {id: 3, followed: true, avavtarUrl: 'https://clck.ru/bYqmB', firstName: 'James', lastName: 'Ford', status: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, aliquid!', location: {country: 'USA', state: 'California', city: 'Los Angeles'}},
        ])
    }
    return props.users.map(user => <div key={`${user.id}${user.name}`}>
        
        <div className={s.friendsWrapper}>
            <span>

                <div>
                    <img className={s.avatar} src={user.avavtarUrl} alt='avatar'></img>
                </div>

                <div>

                    {user.followed === true ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button> : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
                    
                </div>
            </span>    
        
            <span className={s.information}>
                <div>{`${user.firstName} ${user.lastName}`}</div>
                <div>{`${user.location.country}, ${user.location.state}, ${user.location.city}`}</div>
                <div>{user.status}</div>
            </span>
            <span>
                
            </span>
            </div>
    </div>)

}

export default Users;