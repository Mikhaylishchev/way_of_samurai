/* import React from 'react';

import store from '../redux/redux-store';
import Friends from './Friends';

const FriendsContainer = () => {

    return(

        <storeContext.Consumer>
            
            
        
        </storeContext.Consumer>
    );
}

export default FriendsContainer; */


import React from 'react';
import storeContext from '../../storeContext';
import Friends from './Friends';


const FriendsContainer = () => {

  return (

    <storeContext.Consumer> 
      
      {store => {

        // let state = store.getState();

        return (
        
          <Friends friendsPage={store.getState().friendsPage}/>
        )

      }
    } 
    
    </storeContext.Consumer>
  );
}

export default FriendsContainer;