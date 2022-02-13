/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <Menu />

        <div className="app-wrapper-content">

        <Routes>

          <Route path="/profile" element={<Profile />} />
          <Route path="/messages" element={<Dialogs />} />
          {/* <Route path="/news" element={<News />} /> 
          <Route path="/music" element={<Music />} /> 
          <Route path="/settings" element={<Settings />} /> */}

        </Routes>

        </div>
  
      </div>
      </BrowserRouter>
  );
}

export default App;