import React from 'react';
import storeContext from '../../../storeContext';
import { addPostActionCreator } from '../../redux/store';
import { updateNewPostTextActionCreator } from '../../redux/store';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return (

    <storeContext.Consumer> 
      
      {store => {

        let state = store.getState();

        const addPost = () => {

          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {

          let action = updateNewPostTextActionCreator(text);

          store.dispatch(action)
        }

        return (
        
          <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
        )

      }
    } 
    
    </storeContext.Consumer>
  );
}

export default MyPostsContainer;