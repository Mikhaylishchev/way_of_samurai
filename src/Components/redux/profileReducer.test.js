import { addPostActionCreator, deletePost } from "./profileReducer";
import profileReducer from "./profileReducer";

let state = {
    
    posts: [
        
        {id: 2, message: 'Hi there! How r y\'all?', likesCount: 2},
        {id: 1, message: 'Its my first post!', likesCount: 1},
    ],
}

it('Posts array length should be incremented', () => {

    let action = addPostActionCreator('newPostText');

    let newState = profileReducer(state, action);
    
    expect(newState.posts.length).toBe(3);
})

it('New post message should be correct', () => {

    let action = addPostActionCreator('newPostText');

    let newState = profileReducer(state, action);
    
    expect(newState.posts[0].message).toBe('newPostText');
})

it('Posts arrays length should be decrement after removal', () => {

    let action = deletePost(1);

    let newState = profileReducer(state, action);
    
    expect(newState.posts.length).toBe(1);
})
