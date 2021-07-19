import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"

const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"

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

  isLoggedIn: false
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
          status: userData.status,
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

    default:
      return state
  }
}

export default loginReducer