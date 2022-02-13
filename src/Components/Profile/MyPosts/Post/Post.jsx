/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (

        <div className={s.item}>
              <img className={s.avatar}></img>
              
              <span className={s.message}>{props.message}</span>

              <div className={s.rating}>
                <span className={s.like}>&#128153;</span>{props.likesCount}</div>
        </div>
    )
}

export default Post;