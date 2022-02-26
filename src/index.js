import React from 'react';
import ReactDOM from 'react-dom';
// import store from './Components/redux/store';
import store from './Components/redux/redux-store';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import storeContext from './storeContext';

let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>

        <BrowserRouter>

          <storeContext.Provider value={store}>

            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>

          </storeContext.Provider>
          
        </BrowserRouter>
      
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);