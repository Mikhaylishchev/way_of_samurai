import React from 'react';
import s from '../Friends.module.css';
import { NavLink } from 'react-router-dom';

const RandomFriends = (props) => {


    return(

        <div className={s.randomFriendsBlock}>

            <div className={s.subheader}><NavLink to='/friends'>Friends</NavLink></div>     
            
            <div className={s.randomFriendsContainer}>
                <div className={s.item}>
                    
                </div>
                <div className={s.item}></div>
                <div className={s.item}></div>
            </div>
        </div>

        
    );
}

export default RandomFriends;