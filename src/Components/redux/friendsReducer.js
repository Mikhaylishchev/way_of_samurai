let initialState = {
            
    myFriends: [

        {id: 1, name: 'Jack', lastname: 'Shepard', avatar: 'https://clck.ru/bVQVw'},
        {id: 2, name: 'John', lastname: 'Locke'},
        {id: 3, name: 'James', lastname: 'Ford', avatar: 'https://clck.ru/bYqmB'},
        {id: 4, name: 'Jacob', lastname: '', avatar: 'https://clck.ru/ciRjV'},
        {id: 4, name: 'Juliet', lastname: 'Burk', avatar: 'https://clck.ru/ciSvS'},
        {id: 5, name: 'Michael', lastname: 'Dawson', avatar: 'https://clck.ru/bVQm7'},
        {id: 6, name: 'Kate', lastname: 'Austen', avatar: 'https://clck.ru/bVQmC'},
    ],

    recommendedFriends: [

        {id: 1, name: 'Desmond', lastname: 'Hume', avatar: 'https://clck.ru/bVXUz'},
        {id: 2, name: 'Benjamine', lastname: 'Linus', avatar: 'https://clck.ru/bXC3X'},
        {id: 3, name: 'Claire', lastname: 'Littleton', avatar: 'https://clck.ru/bX7W2'},
        {id: 4, name: 'Charlie', lastname: 'Pace', avatar: 'https://clck.ru/bX8G2'},
        {id: 5, name: 'Richard', lastname: 'Alpert'},
        {id: 6, name: 'Hugo', lastname: 'Reyes', avatar: 'https://clck.ru/bX8ip'},
        
    ]
}

const dialogsReducer = (state = initialState, action) => {
        
    return state;        
}

export default dialogsReducer;