import { combineReducers, createStore } from "redux";
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer";
import pagesReducer from "./pages-reducer";
import profileReducer from "./profile-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  loginPage: loginReducer,
  usersPage: usersReducer,
  pages: pagesReducer,
})

const store = createStore(reducers)

export default store
window.store = store


const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_FOLLOW = "SET-FOLLOW"
const SET_UNFOLLOW = "SET-UNFOLLOW"
const CREATE_USERS = "CREATE-USERS"
const UPDATE_USERS = "UPDATE-USERS"
const UP_CURRENT_PAGE = "UP-CURRENT-PAGE"
const SET_FETCHING_TRUE = "SET-FETCHING-TRUE"
const SET_FETCHING_FALSE = "SET-FETCHING-FALSE"
const SET_CURRENT_USER_PAGE = "SET-CURRENT-USER-PAGE"


export const addMessage = () => {
  const users = store.getState().profilePage.users
  const loginUser = store.getState().loginPage.getLoginUser()
  return {
    type: ADD_MESSAGE,
    fullName: users[store.getState().dialogsPage.getCheckedDialog()].profileStats.fullName,
    userPhoto: users[loginUser]?.avatar || noAvatar
  }
}

export const setCheckedDialog = (event) => {
  return {
    type: SET_CHECKED_DIALOG,
    userId: event.target.attributes.userId.value
  }
}

export const setDialogValueText = (event) => {
  return {
    type: SET_DIALOG_VALUE_TEXT,
    value: event.target.value
  }
}

export const addPost = (userId) => {
  return {
    type: ADD_POST,
    userId
  }
}

export const setPostValueText = (event) => {
  return {
    type: SET_POST_VALUE_TEXT,
    value: event.target.value
  }
}

export const setLoginUser = (event) => {
  return {
    type: SET_LOGIN_USER,
    userId: event.target.userid
  }
}

export const setUnfollow = (userId) => {
  return {
    type: SET_UNFOLLOW,
    userId
  }
}

export const setFollow = (userId) => {
  return {
    type: SET_FOLLOW,
    userId
  }
}

export const createUsers = (response) => {
  return {
    type: CREATE_USERS,
    users: response.data.items,
    totalCount: response.data.totalCount
  }
}

export const updateUsers = (response) => {
  return {
    type: UPDATE_USERS,
    users: response.data.items,
    totalCount: response.data.totalCount
  }
}

export const upCurrentPage = () => {
  return {
    type: UP_CURRENT_PAGE
  }
}

export const setFetchingTrue = () => {
  return {
    type: SET_FETCHING_TRUE
  }
}

export const setFetchingFalse = () => {
  return {
    type: SET_FETCHING_FALSE
  }
}

export const setCurrentUserPage = (event) => {
  return {
    type: SET_CURRENT_USER_PAGE,
    currentUserPage: event.target.attributes.userid.value
  }
}