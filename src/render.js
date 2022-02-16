import React from 'react';
import ReactDOM from 'react-dom';
import structure from './Components/redux/structure';
import { addPost } from './Components/redux/structure';
import App from './App';
import './index.css';

export let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>
      <App structure={structure} addPost={addPost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}