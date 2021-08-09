import { applyMiddleware, combineReducers, createStore } from "redux";
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer";
import pagesReducer from "./pages-reducer";
import profileReducer from "./profile-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";
import { getUsersAPI, toggleFollowAPI, authAPI, profileAPI, setStatusAPI, setStatsAPI, setLoginAPI, setLogoutAPI, putNewProfilePhotoAPI } from "./../API";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer, stopSubmit } from "redux-form"

const reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  loginPage: loginReducer,
  usersPage: usersReducer,
  pages: pagesReducer,
  form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
window.store = store


const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_FOLLOW = "SET-FOLLOW"
const SET_UNFOLLOW = "SET-UNFOLLOW"
const CREATE_USERS = "CREATE-USERS"
const UPDATE_USERS = "UPDATE-USERS"
const UP_CURRENT_PAGE = "UP-CURRENT-PAGE"
const SET_FETCHING_TRUE = "SET-FETCHING-TRUE"
const SET_FETCHING_FALSE = "SET-FETCHING-FALSE"
const SET_CURRENT_USER_PAGE = "SET-CURRENT-USER-PAGE"
const SET_USER = "SET-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"
const SET_LOGIN_USER = "SET-LOGIN-USER"
const ADD_IN_FOLLOW_TOGGLE = "ADD-IN-FOLLOW-TOGGLE"
const REMOVE_IN_FOLLOW_TOGGLE = "REMOVE-IN-FOLLOW-TOGGLE"
const SET_EDIT_MODE = "SET-EDIT-MODE"
const UNSET_EDIT_MODE = "UNSET-EDIT-MODE"
const SET_STATUS = "SET-STATUS"
const SET_STATUS_EDIT_TEXT = "SET_STATUS_EDIT_TEXT"
const SET_NEW_STATS = "SET_NEW_STATS"
const SET_EDIT_STATS = "SET_EDIT_STATS"
const UNSET_EDIT_STATS = "UNSET_EDIT_STATS"
const SET_INITIALIZE = "SET-INITIALIZE"
const SET_UNINITIALIZED = "SET-UNINITIALIZED"
const ADD_NEW_PROFILE_PHOTO = "ADD-NEW-PROFILE-PHOTO"


export const addMessage = (event) => {
  return {
    type: ADD_MESSAGE,
    userPhoto: event.target.attributes.avatar.value || noAvatar,
    fullName: event.target.attributes.fullname.value,
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

export const setLoginUser = (userData) => {
  return {
    type: SET_LOGIN_USER,
    userData
  }
}

export const setLogoutUser = () => {
  return {
    type: SET_LOGOUT_USER
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

export const createUsers = (data) => {
  return {
    type: CREATE_USERS,
    users: data.items,
    totalCount: data.totalCount
  }
}

export const updateUsers = (data) => {
  return {
    type: UPDATE_USERS,
    users: data.items,
    totalCount: data.totalCount
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

export const setCurrentUserPage = (currentUserPage) => {
  return {
    type: SET_CURRENT_USER_PAGE,
    currentUserPage
  }
}

export const setUser = ([profile, status]) => {
  return {
    type: SET_USER,
    user: {...profile, status}
  }
}

export const addInFollowToggle = (id) => {
  return {
    type: ADD_IN_FOLLOW_TOGGLE,
    id
  }
}

export const removeInFollowToggle = (id) => {
  return {
    type: REMOVE_IN_FOLLOW_TOGGLE,
    id
  }
}


export const setEditMode = () => {
  return {
    type: SET_EDIT_MODE
  }
}

export const unsetEditMode = () => {
  return {
    type: UNSET_EDIT_MODE
  }
}

export const setStatus = () => {
  return {
    type: SET_STATUS
  }
}

export const setStatusEditText = (event) => {
  return {
    type: SET_STATUS_EDIT_TEXT,
    status: event.target.value
  }
}

export const setNewStats = (stats, id) => {
  return {
    type: SET_NEW_STATS,
    stats,
    id
  }
}

export const setEditStats = () => {
  return {
    type: SET_EDIT_STATS
  }
}

export const unsetEditStats = () => {
  return {
    type: UNSET_EDIT_STATS
  }
}

export const setInitialize = () => {
  return {
    type: SET_INITIALIZE
  }
}

export const setUninitialized = () => {
  return {
    type: SET_UNINITIALIZED
  }
}

export const addNewProfilePhoto = (photos) => {
  return {
    type: ADD_NEW_PROFILE_PHOTO,
    photos
  }
}



// Thunk
export const setUsers = (currentPage, usersOnPage, func) => async (dispatch) => {
  dispatch(setFetchingTrue())
  const response = await getUsersAPI(currentPage, usersOnPage)
  func(response)
  response && dispatch(setFetchingFalse())
}

export const toggleFollow = (userId, followed) => async (dispatch) => {
  dispatch(addInFollowToggle(userId))
  const response = await toggleFollowAPI(userId, followed)
  response && followed ? dispatch(setUnfollow(userId)) : dispatch(setFollow(userId))
  response && dispatch(removeInFollowToggle(userId))
}

export const userAuth = () => async (dispatch) => {
  dispatch(setUninitialized())
  let loginUserData = {}
  const authResponse = await authAPI()
  if (authResponse.resultCode === 0) {
    loginUserData = {
      ...authResponse.data
    }
    const response = await profileAPI(loginUserData.id)
    const [data, status] = response
    loginUserData = {
      ...loginUserData,
      ...data,
      status
    }
    response && dispatch(setLoginUser(loginUserData))
    response && dispatch(setInitialize())
  } else dispatch(setInitialize())
}

export const getProfileUser = (userId) => async (dispatch) => {
  dispatch(setCurrentUserPage(userId))
  const response = await profileAPI(userId)
  dispatch(setUser(response))
}

export const pullStatus = (text) => async (dispatch) => {
  const response = await setStatusAPI(text)
  response && dispatch(setStatus())
}

export const pullNewStats = (stats, id) => async (dispatch) => {
  const newStats = {
    aboutMe: stats.aboutMe,
    contacts: stats.contacts,
    fullName: stats.fullName,
    lookingForAJob: stats.lookingForAJob,
    lookingForAJobDescription: stats.lookingForAJobDescription,
  }
  const response = await setStatsAPI(newStats)
  response && dispatch(setNewStats(newStats, id))
}

export const postLoginUser = (formData) => async (dispatch) => {
  const response = await setLoginAPI(formData)
  switch (response.resultCode) {
    case 0: return userAuth()(dispatch)
    case 1: return dispatch(stopSubmit("loginForm", {_error: response.messages[0]}))
    default: return
  }
}

export const deleteLoginUser = () => async (dispatch) => {
  const response = await setLogoutAPI()
  response && dispatch(setLogoutUser())
}

export const putNewPhoto = (photo) => async (dispatch) => {
  const response = await putNewProfilePhotoAPI(photo)
  response.resultCode === 0 && dispatch(addNewProfilePhoto(response.data.photos))
}