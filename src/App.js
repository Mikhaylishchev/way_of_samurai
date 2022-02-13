/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Profile from './Components/Profile';
import Header from './Components/Header';
import Menu from './Components/Menu';

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