let store = {

    _state: {

        profilePage: {
    
            posts: [
                {id: 2, message: 'Hi there! How r ya?', likesCount: 2},
                {id: 1, message: 'Its my first post!', likesCount: 1},
            ],
    
            newPostText: ''
        },
    
        dialogsPage: {
    
            letters: [
                {id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
                {id: 2, message: '4 8 15 16 23 42'},
                {id: 3, message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis.'},
                {id: 4, message: 'WAAAAAAAAAAAAAAAAAAAAAAAAALT!!!!!!!!!!!!!!!!!1111111'},
                {id: 5, message: 'Lorem, ipsum dolor.'}, 
            ],
    
            
            dialogs: [
                {id: 1, name: 'Jack', avatar: 'https://clck.ru/bVQVw'},
                {id: 2, name: 'John'},
                {id: 3, name: 'James', avatar: 'https://clck.ru/bVQVw'},
                {id: 4, name: 'Michael', avatar: 'https://clck.ru/bVQm7'},
                {id: 5, name: 'Kate', avatar: 'https://clck.ru/bVQmC'},
            ]
        },
    
        friendsPage: {
            
            myFriends: [
    
                {id: 1, name: 'Jack', lastname: 'Shepard', avatar: 'https://clck.ru/bVQVw'},
                {id: 2, name: 'John', lastname: 'Locke'},
                {id: 3, name: 'James', lastname: 'Ford', avatar: 'https://clck.ru/bYqmB'},
                {id: 4, name: 'Michael', lastname: 'Dawson', avatar: 'https://clck.ru/bVQm7'},
                {id: 5, name: 'Kate', lastname: 'Austen', avatar: 'https://clck.ru/bVQmC'},
            ],
    
            recommendedFriends: [
    
                {id: 1, name: 'Desmond', lastname: 'Hume', avatar: 'https://clck.ru/bVXUz'},
                {id: 2, name: 'Benjamine', lastname: 'Linus', avatar: 'https://clck.ru/bXC3X'},
                {id: 3, name: 'Claire', lastname: 'Littleton', avatar: 'https://clck.ru/bX7W2'},
                {id: 4, name: 'Charlie', lastname: 'Pace', avatar: 'https://clck.ru/bX8G2'},
                {id: 5, name: 'Richard', lastname: 'Alpert'},
                {id: 6, name: 'Hugo', lastname: 'Reyes', avatar: 'https://clck.ru/bX8ip'},
                
            ]
        },    
    },

    _callSubscriber() {

        console.log('render');
    },

    getState() {

        return this._state;
    },

    /* addPost() {

        let newPost = {
            id: this._state.profilePage.posts[0].id + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
    
        this._state.profilePage.posts.unshift(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    }, */

    subscribe(observer) {

        this._callSubscriber = observer;
    },

    dispatch(action) {

        if(action.type === 'ADD-POST') {

            let newPost = {
                id: this._state.profilePage.posts[0].id + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
        
            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {

            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}

export const addPostActionCreator = () => {

    return{
      
      type: 'ADD-POST'
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
  
    return {
      
      type: 'UPDATE-NEW-POST-TEXT',
      newText: text
    }
  }

export default store;

window.store = store;