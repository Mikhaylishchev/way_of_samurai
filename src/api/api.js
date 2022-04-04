import * as axios from "axios";

const instance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredenctials: true,
    headers: {

        "API-KEY": "8cda2f48-39ab-41f1-a73f-0635e2218245"
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 5) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
    
                withCredenctials: true
            })
    
            .then(response => response.data);
    },

    getAuth() {

        return instance.get(`auth/me`, {
    
                withCredentials: true
            })
    
            .then(response => response.data);
    },

    getFollowing(user) {

        return instance.post(`follow/${user.id}`, {}, {
    
            withCredentials: true,

            headers: {
    
                "API-KEY": "8cda2f48-39ab-41f1-a73f-0635e2218245"
            }
        })
    }   
}