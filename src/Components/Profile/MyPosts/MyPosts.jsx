import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);

  const onAddPost = (values) => {

    props.addPost(values.newPostText);
  }

  return (

    <div className="content">

      <div className={s.postsAdder}>

        <ReduxAddingNewPostForm onSubmit={onAddPost}/>

        <div>
          <h2>My posts</h2>
        </div>

        {postsElements}

      </div>
    </div>
  )
}

const addingNewPostForm = (props) => {

  return (

    <form onSubmit={props.handleSubmit}>
      <div><Field component="textarea" name="newPostText" placeholder="share your mood!" /></div>

      <div><button>Add Post</button></div>
    </form>
  )
}

const ReduxAddingNewPostForm = reduxForm({form: 'profileAddingNewPostForm'})(addingNewPostForm)

export default MyPosts;