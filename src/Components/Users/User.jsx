import s from './User.module.css';
import { NavLink } from 'react-router-dom';

export const User = ({user, isAuth, isFollowingInProcess, unfollow, follow}) => {

    return (
        <NavLink to={`/profile/${user.id}`} className={s.friendsWrapper}>
                        <span>
                            <div>
    
                            <div>
                                <img className={s.avatar} src={user.photos.small || 'https://clck.ru/b2h9v'} alt='avatar'></img>
                            </div>
    
                            </div>
    
                            <div className={s.followBtn}>
                                {<button disabled={isAuth ? isFollowingInProcess.some(id => id === user.id) : true} onClick={(event) => {

                                    event.preventDefault();
                                    
                                    if (user.followed) {
    
                                        unfollow(user);        //      unfollow-thunk
                                        
                                    } else {
    
                                        follow(user);        //      follow-thunk
                                    }
    
                                }}>{user.followed ? 'Unfollow' : 'Follow'}</button>}
                                
                            </div>
                        </span>
    
                        <span className={s.information}>
                            <div className={s.name}>{`${user.name}`}</div>
                            <div className={s.location}>{'country'}, {'state'}, {user.id}, {'city'}</div>
                            <div className={s.status}>{user.status}</div>
                        </span>
    
                    </NavLink>
    )
}