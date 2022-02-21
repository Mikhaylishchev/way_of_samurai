import React from 'react';

import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Friends from './Components/Friends/Friends';

function App(props) {

  return (
    
    <BrowserRouter>

      <div className="app-wrapper">

        <Header />
        <Menu />

        <div className="app-wrapper-content">

          <Routes>
            
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} newPostText={props.newPostText} />} />              
            <Route path="/messages" element={<Dialogs state={props.state.dialogsPage} letters={props.state.dialogsPage.letters}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/friends" element={<Friends state={props.state.friendsPage} />} />
            
          </Routes>
          
        </div>
      </div>
    </BrowserRouter>

  );
};

export default App;




