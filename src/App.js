import React from 'react';
import './App.css';
import Menu from './Components/Menu/Menu';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
// import DialogsContainer from './Components/Dialogs/DialogsContainer';
// import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
// import LoginPage from './Components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './Components/redux/appReducer';
import Spinner from './Components/common/Spinner/Spinner';

const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const LoginPage = React.lazy(() => import('./Components/Login/Login'));


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
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/messages" element={<React.Suspense fallback={<Spinner />}><DialogsContainer /></React.Suspense>} />
              <Route path="/users" element={<React.Suspense fallback={<Spinner />}><UsersContainer /></React.Suspense>} />
              <Route path="/login" element={<React.Suspense fallback={<Spinner />}><LoginPage /></React.Suspense>} />
            
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