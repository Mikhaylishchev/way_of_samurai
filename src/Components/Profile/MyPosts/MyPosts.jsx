import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


  let postsElements = props.posts.map(post => <Post key = {post.id} message = {post.message} likesCount = {post.likesCount}/>);

  let newPostElement = React.createRef();

  const addPost = () => {

    let text = newPostElement.current.value;

    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (

    <div className="content">
        
        <div className={s.postsAdder}>
            
            <div><textarea ref={newPostElement} placeholder="share your mood!"></textarea></div>
            
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