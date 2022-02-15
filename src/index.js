import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi there! How r ya?', likesCount: 2},
  {id: 2, message: 'Its my first post!', likesCount: 1},
];

let dialogs = [
  {id: 1, name: 'Jack'},
  {id: 2, name: 'John'},
  {id: 3, name: 'James'},
  {id: 4, name: 'Michael'},
  {id: 5, name: 'Kate'},
];

let letters = [
  {id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
  {id: 2, message: '4 8 15 16 23 42'},
  {id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
  {id: 4, message: 'WAAAAAAAAAAAAAAAAAAAAAAAAALT!!!!!!!!!!!!!!!!!1111111'},
  {id: 5, message: 'Lorem, ipsum dolor.'}, 
];

ReactDOM.render(
  <React.StrictMode>
  <App posts={posts} dialogs={dialogs} letters={letters}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
