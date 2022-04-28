import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCrerator, requiredField,  } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength10 = maxLengthCrerator(10);

const MyPosts = (props) => {

  // console.log(props)

  let postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} avatar={props.avatar} />);

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

const AddingNewPostForm = (props) => {

  return (

    <form onSubmit={props.handleSubmit}>
      <div><Field validate={[requiredField, maxLength10]} component={Textarea} name="newPostText" placeholder="share your mood!" /></div>

      <div><button>Add Post</button></div>
    </form>
  )
}

const ReduxAddingNewPostForm = reduxForm({form: 'profileAddingNewPostForm'})(AddingNewPostForm)

export default MyPosts;