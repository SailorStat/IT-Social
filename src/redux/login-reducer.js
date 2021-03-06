import choosePhoto from "../assets/scripts/choosePhoto"

const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"
const SET_EDIT_MODE = "SET-EDIT-MODE"
const UNSET_EDIT_MODE = "UNSET-EDIT-MODE"
const SET_STATUS = "SET-STATUS"
const SET_STATUS_EDIT_TEXT = "SET_STATUS_EDIT_TEXT"
const SET_INITIALIZE = "SET-INITIALIZE"
const SET_UNINITIALIZED = "SET-UNINITIALIZED"
const ADD_NEW_PROFILE_PHOTO = "ADD-NEW-PROFILE-PHOTO"
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL"


const initialState = {
  loginUser: {
  },
  isLoggedIn: false,
  statusEditMode: false,
  statusEditText: "",
  initialize: false,
  captchaUrl: null
}

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_USER: {
      const userData = action.userData
      return {
        ...state,
        isLoggedIn: true,
        statusEditText: userData.status,
        captchaUrl: null,
        loginUser: {
          online: true,
          id: userData.id,
          name: userData.fullName,
          status: userData.status || "no status",
          photo: choosePhoto(userData.photos),
          followed: true
        }
      }
    }

    case ADD_NEW_PROFILE_PHOTO: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          photo: choosePhoto(action.photos)
        }
      }
    }

    
    case SET_LOGOUT_USER: {
      return {
        ...state,
        isLoggedIn: false,
        statusEditText: "",
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
        statusEditMode: false
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
          status: state.statusEditText || "no status"
        },
        statusEditMode: false,
      }
    }

    case SET_INITIALIZE: {
      return {
        ...state,
        initialize: true
      }
    }

    case SET_UNINITIALIZED: {
      return {
        ...state,
        initialize: false
      }
    }

    case SET_CAPTCHA_URL: {
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    }

    default:
      return state
  }
}

export default loginReducer