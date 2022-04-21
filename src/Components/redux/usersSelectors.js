import { createSelector } from 'reselect';

export const getUsersSelector = (state) => {

    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {    //    Selector, созданный при помощи библиотеки Reselect

    return users
})

export const getIsFetchingSelector = (state) => {

    return state.usersPage.isFetching
}

export const getPageSizeSelector = (state) => {

    return state.usersPage.pageSize
}

export const getUsersAmountSelector = (state) => {

    return state.usersPage.usersAmount
}

export const getCurrentPageSelector = (state) => {

    return state.usersPage.currentPage
}


export const getIsFollowingInProcessSelector = (state) => {

    return state.usersPage.isFollowingInProcess
}

export const getIsAuthSelector = (state) => {

    return state.auth.isAuth
}