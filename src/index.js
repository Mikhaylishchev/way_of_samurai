import React from 'react';
import ReactDOM from 'react-dom';
import structure, { subscribe } from './Components/redux/structure';
import { addPost, updateNewPostText } from './Components/redux/structure';
import App from './App';
import './index.css';

let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
      <App structure={structure} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);