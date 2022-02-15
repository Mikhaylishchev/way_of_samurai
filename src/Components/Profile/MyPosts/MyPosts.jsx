/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {


  let postsData = [
    {id: 1, message: 'Hi! How r ya?', likesCount: 2},
    {id: 2, message: 'Its my first post!', likesCount: 1},
  ];

  let postsElements = postsData.map(post => <Post key = {post.id} message = {post.message} likesCount = {post.likesCount}/>);

  return (

    <div className="content">
        
        <div className={s.postsAdder}>
            
            <div><textarea></textarea></div>
            
            <div><button>Send Post</button></div>
            
          <div>
            <h2>My posts</h2>
          </div>

          {postsElements}

        </div>
      </div>
  )
}

export default MyPosts;