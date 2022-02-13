/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';

function App() {
  return (

      <div className="app-wrapper">

        <Header />

        <Menu />

        <Profile />
  
      </div>
  );
}

export default App;