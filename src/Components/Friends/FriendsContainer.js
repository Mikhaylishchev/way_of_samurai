import React from 'react';
import storeContext from '../../storeContext';
import Friends from './Friends';


const FriendsContainer = () => {

  return (

    <storeContext.Consumer> 
      
      {store => {

        return (
        
          <Friends friendsPage={store.getState().friendsPage}/>
        )

      }
    } 
    
    </storeContext.Consumer>
  );
}

export default FriendsContainer;