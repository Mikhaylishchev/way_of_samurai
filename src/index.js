import React from 'react';
import ReactDOM from 'react-dom';
import store from './Components/redux/redux-store';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


let rerenderEntireTree = () => {

    ReactDOM.render(
      <React.StrictMode>

        <BrowserRouter>

          <Provider store={store}>

            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>

          </Provider>
          
        </BrowserRouter>
      
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);