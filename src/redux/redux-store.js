import { applyMiddleware, combineReducers, createStore } from "redux";
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer";
import pagesReducer from "./pages-reducer";
import profileReducer from "./profile-reducer";
import loginReducer from "./login-reducer";
import usersReducer from "./users-reducer";
import { getUsersAPI, toggleFollowAPI, userAPI, authAPI, profileAPI, setStatusAPI, setStatsAPI, setLoginAPI, setLogoutAPI } from "./../API";
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
const SET_UNINITIALIZE = "SET-UNINITIALIZE"


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

export const setUninitialize = () => {
  return {
    type: SET_UNINITIALIZE
  }
}


// With API
export const setUsers = (currentPage, usersOnPage, func) => (dispatch) => {
  dispatch(setFetchingTrue())
  getUsersAPI(currentPage, usersOnPage).then(response => {
    func(response)
    dispatch(setFetchingFalse())
  })
}

export const toggleFollow = (userId, followed) => (dispatch) => {
  dispatch(addInFollowToggle(userId))
    toggleFollowAPI(userId, followed)
      .then(resultCode => {
        resultCode && followed && dispatch(setUnfollow(userId)) || dispatch(setFollow(userId))
        dispatch(removeInFollowToggle(userId))
      })
}

export const userAuth = () => (dispatch) => {
  dispatch(setUninitialize())

  let loginUserData = {}
  authAPI().then(data => {
    if (data.resultCode === 0) {
      loginUserData = {
        ...data.data
      }
    } else dispatch(setInitialize())
    userAPI(loginUserData.id).then(data => {
      loginUserData = {
        ...loginUserData,
        ...data
      }
      dispatch(setLoginUser(loginUserData))
      dispatch(setInitialize())
    })
  })
}

export const getProfileUser = (userId) => (dispatch) => {
  dispatch(setCurrentUserPage(userId))
  profileAPI(userId).then(response => dispatch(setUser(response)))
}

export const getIdCurrentUser = () => (dispatch) => {
  authAPI().then(data => getProfileUser(data.data.id)(dispatch))
}

export const pullStatus = (text) => (dispatch) => {
  setStatusAPI(text)
    .then(response => response && dispatch(setStatus()))
}

export const pullNewStats = (stats, id) => (dispatch) => {
  const newStats = {
    aboutMe: stats.aboutMe,
    contacts: stats.contacts,
    fullName: stats.fullName,
    lookingForAJob: stats.lookingForAJob,
    lookingForAJobDescription: stats.lookingForAJobDescription,
  }
  setStatsAPI(newStats)
    .then(response => response && dispatch(setNewStats(newStats, id)))
}

export const postLoginUser = (formData) => (dispatch) => {
  setLoginAPI(formData)
    .then(response => {
      if (response.resultCode === 0) return userAuth()(dispatch)
      if (response.resultCode === 1) return dispatch(stopSubmit("loginForm", {_error: response.messages[0]}))
    })
}

export const deleteLoginUser = () => (dispatch) => {
  setLogoutAPI()
    .then(response => response && dispatch(setLogoutUser()))
}