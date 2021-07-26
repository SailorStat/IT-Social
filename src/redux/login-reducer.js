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
    online: true,
    id: 17725,
    name: "Sailor Stat",
    status: "Live is perfect",
    photo: userPhoto,
    followed: true,
    location: "Ростов-на-Дону, Россия"
  },

  isLoggedIn: true,

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
        loginUser: {}
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