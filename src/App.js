import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import LoginPage from './Components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Components/redux/appReducer';
import Spinner from './Components/common/Spinner/Spinner';

class App extends React.Component {

  componentDidMount() {

    this.props.initializeApp()
  }

  render() {

    return (

      this.props.initialized

      ? <div className="app-wrapper">
  
        <HeaderContainer />
        <Menu />
        
  
        <div className="app-wrapper-content">
  
          <Routes>
            
              <Route path="/" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/messages" element={<DialogsContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
            
          </Routes>
  
        </div>
      </div>

      : <Spinner />
    );
  }
};

const mapStateToProps = (state) => ({

  initialized: state.app.initialized
})

export default compose (connect (mapStateToProps, {initializeApp})(App));