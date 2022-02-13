/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
// import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    return (

      <div className="content">
          
          <div>
            posts
              <textarea></textarea>
              <button>Send Post</button>
            <div>
              new post
            </div>

            <Post message = 'Hi! How r ya?' likesCount = '20'/>
            <Post message = 'Its my first post!'/>


          </div>
        </div>
    )
}

export default MyPosts;