import React from 'react';

import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
// import Friends from './Components/Friends/Friends';
import RandomFriends from './Components/Friends/RandomFriends/RandomFriends';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

function App(props) {

  // const state = props.store.getState()

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
            {/* <Route path="/friends" element={<Friends friendsPage={state.friendsPage} />} /> */}
            <Route path="/friends" element={<RandomFriends />} />
          
        </Routes>

      </div>
    </div>
  );
};

export default App;




