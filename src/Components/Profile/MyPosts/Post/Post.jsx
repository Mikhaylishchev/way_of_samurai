import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
              <img src={props.avatar} className={s.avatar} alt="avatar"></img>
              
              <span className={s.message}>{props.message}</span>

              <div className={s.rating}>
                <span className={s.like}>&#128153;</span>{props.likesCount}</div>
        </div>
    )
}

export default Post;