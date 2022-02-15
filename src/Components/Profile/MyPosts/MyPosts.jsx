import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(post => <Post key = {post.id} message = {post.message} likesCount = {post.likesCount}/>);

  return (

    <div className="content">
        
        <div className={s.postsAdder}>
            
            <div><textarea placeholder="share your mood!"></textarea></div>
            
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