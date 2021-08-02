import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.profilePage.users
}

export const getCurrentUserId = (state) => {
  return state.loginPage.loginUser.id
}

export const getCurrentUserPhoto = (state) => {
  return state.loginPage.loginUser.photo
}

export const getIsLoggedIn = (state) => {
  return state.loginPage.isLoggedIn
}

export const getCurrentUserPage = (state) => {
  return state.profilePage.currentUserPage
}

export const getInitialize = (state) => {
  return state.loginPage.initialize
}


// Super Selectors
export const hasUserSuper = createSelector(getUsers, getCurrentUserPage, (users, currentUserPage) => {
  return !!users[currentUserPage]
})
