import React from 'react';
// import s from './MyPosts.module.css';
// import Post from './Post/Post';
import { addPostActionCreator } from '../../redux/store';
import { updateNewPostTextActionCreator } from '../../redux/store';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

  let state = props.store.getState();

  // let postsElements = state.profilePage.posts.map(post => <Post key = {post.id} message = {post.message} likesCount = {post.likesCount}/>);

  // let newPostElement = React.createRef();

  const addPost = () => {

    // props.addPost();
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {

    // let text = newPostElement.current.value;

    let action = updateNewPostTextActionCreator(text);

    props.store.dispatch(action)
  }  

  return (

    <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
  )
}

export default MyPostsContainer;