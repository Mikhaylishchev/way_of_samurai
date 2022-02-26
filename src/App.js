import React from 'react';

import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import FriendsContainer from './Components/Friends/FriendsContainer';

function App(props) {

  return (

    <div className="app-wrapper">

      <Header />
      <Menu />
      

      <div className="app-wrapper-content">

        <Routes>
          
            <Route path="/profile" element={<Profile />} />              
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<FriendsContainer />} />
          
        </Routes>

      </div>
    </div>
  );
};

export default App;




