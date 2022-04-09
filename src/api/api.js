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

    getUserProfile(userId) {

        console.warn('Obsolete method. Use profile API.');

        return profileAPI.getProfile(userId);
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

export const authAPI = {

    me() {

        return instance.get(`auth/me`)
    
            .then(response => response.data);
    }
}

export const profileAPI = {

    getProfile(userId) {

        return instance.get(`profile/${userId}`)

            .then(response => response.data)
    },

    getStatus(userId) {

        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {

        return instance.put(`profile/status/`, {status})
    }
}