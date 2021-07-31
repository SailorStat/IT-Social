import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"

const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"
const SET_EDIT_MODE = "SET-EDIT-MODE"
const UNSET_EDIT_MODE = "UNSET-EDIT-MODE"
const SET_STATUS = "SET-STATUS"
const SET_STATUS_EDIT_TEXT = "SET_STATUS_EDIT_TEXT"

const initialState = {
  loginUser: {
  },

  isLoggedIn: false,

  statusEditMode: false,
  statusEditText: ""
}

const loginReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_LOGIN_USER: {
      const userData = action.userData
      return {
        ...state,
        isLoggedIn: true,
        loginUser: {
          online: true,
          id: userData.id,
          name: userData.fullName,
          status: userData.status || "no status",
          photo: userData.photos.large || userData.photos.small || noAvatar,
          followed: true
        }
      }
    }

    
    case SET_LOGOUT_USER: {
      return {
        ...state,
        isLoggedIn: false,
        loginUser: {
          online: false,
          id: undefined,
          name: undefined,
          status: undefined,
          photo: undefined,
          followed: undefined
        }
      }
    }

    case SET_EDIT_MODE: {
      return {
        ...state,
        statusEditMode: true
      }
    }

    case UNSET_EDIT_MODE: {
      return {
        ...state,
        statusEditMode: false,
        statusEditText: ""
      }
    }

    case SET_STATUS_EDIT_TEXT: {
      return {
        ...state,
        statusEditText: action.status
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          status: state.statusEditText
        },
        statusEditText: "",
        statusEditMode: false,
      }
    }

    default:
      return state
  }
}

export default loginReducer