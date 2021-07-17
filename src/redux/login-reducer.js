import userPhoto from "../assets/img/userPhoto.jpg"

const SET_LOGIN_USER = "SET-LOGIN-USER"

const initialState = {
  loginUser: {
    online: true,
    id: 17725,
    name: "Sailor Stat",
    status: "Live is perfect",
    photo: userPhoto,
    followed: true,
    location: "Ростов-на-Дону, Россия"
  }
}


const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOGIN_USER: {
      return {
        ...state,
        loginUser: action.user
      }
    }
    
    default:
      return state
  }
}

export default loginReducer