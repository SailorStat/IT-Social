import c from "./HeaderWrapper.module.css"
import React from "react";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    this.props.userAuth()
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