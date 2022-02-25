import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator } from '../../redux/store';
import { updateNewPostTextActionCreator } from '../../redux/store';

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post key = {post.id} message = {post.message} likesCount = {post.likesCount}/>);

  let newPostElement = React.createRef();

  const addPost = () => {

    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {

    let text = newPostElement.current.value;

    let action = updateNewPostTextActionCreator(text);

    props.dispatch(action)
  }  

  return (

    <div className="content">
        
        <div className={s.postsAdder}>
            
            <textarea onChange={onPostChange} ref={newPostElement} placeholder="share your mood!" value={props.newPostText}/>
            
            <div><button onClick={addPost}>Send Post</button></div>
            
          <div>
            <h2>My posts</h2>
          </div>

          {postsElements}

        </div>
      </div>
  )
}

export default MyPosts;