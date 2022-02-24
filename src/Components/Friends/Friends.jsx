import React from 'react';
import s from './Friends.module.css';
import Friend from './FriendsItem/FriendsItem';

const Friends = (props) => {

    
    const FriendsElements = props.friendsPage.myFriends.map(item => <Friend key = {item.id} name = {item.name}  lastname = {item.lastname} avatar = {item.avatar || 'https://clck.ru/bVQbn'} />);

    const recommendedFriends = props.friendsPage.recommendedFriends.map(item => <Friend key = {item.id} name = {item.name} lastname = {item.lastname} avatar = {item.avatar || 'https://clck.ru/bVQbn'} />)

    FriendsElements.sort((a, b) => a.name > b.name ? 1 : -1);       /* Alphabet names-sort */

    return (

        <div>

            <div className={s.block}>
    
                <h3 className={s.friendsSubheader}>My friends: </h3>

                <div className = {s.friendsWrapper}>{FriendsElements}</div>

            </div>

            <div className={s.block}>
    
                <h3 className={s.friendsSubheader}>Recommended: </h3>

                <div className = {s.friendsWrapper}>{recommendedFriends}</div>

            </div>

        </div>
    )
}

export default Friends;