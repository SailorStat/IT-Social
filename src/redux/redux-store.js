import { combineReducers, createStore } from "redux";
import userPhoto from "../assets/img/userPhoto.jpg";
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer";
import pagesReducer from "./pages-reducer";
import profileReducer from "./profile-reducer";
import loginReducer from "./login-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  loginPage: loginReducer,
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

export const addMessageActionCreator = () => {
  const users = store.getState().profilePage.users
  const loginUser = store.getState().loginPage.getLoginUser()
  return {
    type: ADD_MESSAGE,
    fullName: users[store.getState().dialogsPage.getCheckedDialog()].profileStats.fullName,
    userPhoto: users[loginUser]?.avatar || noAvatar
  }
}

export const setCheckedDialogActionCreator = (userId) => {
  return {
    type: SET_CHECKED_DIALOG,
    userId
  }
}

export const setDialogValueTextActionCreator = (event) => {
  return {
    type: SET_DIALOG_VALUE_TEXT,
    value: event.target.value
  }
}

export const addPostActionCreator = (userId) => {
  return {
    type: ADD_POST,
    userId
  }
}

export const setPostValueTextActionCreator = (event) => {
  return {
    type: SET_POST_VALUE_TEXT,
    value: event.target.value
  }
}

export const setLoginUserActionCreator = (event) => {
  return {
    type: SET_LOGIN_USER,
    userId: event.target.userid
  }
}