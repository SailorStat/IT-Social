import userPhoto from "../assets/img/userPhoto.jpg"

const SET_LOGIN_USER = "SET-LOGIN-USER"

const initialState = {
  currentUser: {
    online: true,
    id: 17725,
    name: "Sailor Stat",
    status: "Live is perfect",
    avatar: userPhoto,
    followed: true,
    location: "Ростов-на-Дону, Россия"
  },
  _loginUser: "17725",

  getLoginUser() {
    return this._loginUser
  }
}

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_USER: {
      return {
        ...state,
        _loginUser: action.userId
      }
    }
    
    default:
      return state
  }
}

export default loginReducer