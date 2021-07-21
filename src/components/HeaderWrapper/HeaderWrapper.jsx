import c from "./HeaderWrapper.module.css"
import React from "react";
import { authAPI, userAPI } from "./../../API";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    const endPoint = "https://social-network.samuraijs.com/api/1.0/"
    let loginUserData = {}

    authAPI().then(data => {
      if (data.resultCode === 0) {
        loginUserData = {
          ...data.data
        }
      }
      userAPI(loginUserData.id).then(data => {
        loginUserData = {
          ...loginUserData,
          ...data
        }
        this.props.setLoginUser(loginUserData)
      })
    })
  }

  render() {
    return ( this.props.isLoggedIn &&
      <div className={c.header__wrapper}>
        <div className={c.header__button} onClick={this.props.setLogoutUser}>Exit</div>
      </div>
    ) || (
      <div className={c.header__wrapper}>
        <div className={c.header__button}>Registration</div>
        <div className={c.header__button}>Login</div>
      </div>
    )
  }
}

export default HeaderWrapper