import { rerenderEntireTree } from "../../render";

let state = {

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
}

window.state = state;

export let addPost = () => {

    let newPost = {
        id: state.profilePage.posts[0].id + 1,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    
    state.profilePage.posts.unshift(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

    
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;