const SET_LOGIN_USER = "SET-LOGIN-USER"

const initialState = {
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