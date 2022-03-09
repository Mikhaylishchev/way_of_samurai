import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

function App(props) {

  return (

    <div className="app-wrapper">

      <Header />
      <Menu />
      

      <div className="app-wrapper-content">

        <Routes>
          
            <Route path="/profile" element={<ProfileContainer />} />              
            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/friends" element={<FriendsContainer />} /> */}
            <Route path="/users" element={<UsersContainer />} />

          
        </Routes>

      </div>
    </div>
  );
};

export default App;




