import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import structure from './Components/redux/structure';
import {addPost} from './Components/redux/structure';


export let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <React.StrictMode>
      <App structure={structure} addPost={addPost}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
  