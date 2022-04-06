import * as axios from "axios";

const instance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    
    withCredentials: true,
    headers: {

        "API-KEY": "bd85f85d-7cdf-4bb1-ae2f-bb1be42fe32f"
    }
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        
            .then(response => response.data);
    },

    getAuth() {

        return instance.get(`auth/me`)
    
            .then(response => response.data);
    },

    getUserProfile(userId) {

        return instance.get(`profile/${userId}`)

            .then(response => response.data)
    },

    following: (user) => {

        return instance.post(`follow/${user.id}`)
    },

    unfollowing: (user) => {

        return instance.delete(`follow/${user.id}`)
    },

    changingPage: (pageNum, pageSize) => {

        return instance.get(`users?page=${pageNum}&count=${pageSize}`)
    }
}

