import { combineReducers, createStore } from "redux";
import userPhoto from "../assets/img/userPhoto.jpg";
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer";
import pagesReducer from "./pages-reduser";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  pages: pagesReducer
})

const store = createStore(reducers)

export default store
window.store = store



const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
    fullName: store.getState().profilePage.users[store.getState().dialogsPage.getCheckedDialog()].profileStats.fullName,
    userPhoto: store.getState().profilePage.users["17725"]?.avatar || noAvatar
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