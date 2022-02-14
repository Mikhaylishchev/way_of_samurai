/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    return (

      <div className="content">
          
          <div className={s.postsAdder}>
              
              <div><textarea></textarea></div>
              
              <div><button>Send Post</button></div>
              
            <div>
              <h2>My posts</h2>
            </div>

            <Post message = 'Hi! How r ya?' likesCount = '20'/>
            <Post message = 'Its my first post!'/>


          </div>
        </div>
    )
}

export default MyPosts;