import c from "./HeaderWrapper.module.css"
import React from "react";
import axios from "axios";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    const endPoint = "https://social-network.samuraijs.com/api/1.0/"
    let loginUserData = {}

    axios.get(`${endPoint}auth/me`, {
      withCredentials: true
    })
      .then(response => {
        if (response.data.resultCode === 0) {
          loginUserData = {
            ...response.data.data
          }
        }
        axios.get(`${endPoint}profile/${loginUserData.id}`)
          .then(response => {
            loginUserData = {
              ...loginUserData,
              ...response.data
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