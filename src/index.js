import React from 'react';
import ReactDOM from 'react-dom';
import store from './Components/redux/structure';
// import { addPost, updateNewPostText } from './Components/redux/structure';
import App from './App';
import './index.css';


let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
      <App structure={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);