import s from "./HeaderWrapper.module.css"
import React from "react";

class HeaderWrapper extends React.Component {
  componentDidMount() {
    this.props.userAuth()
  }

  render() {
    return ( this.props.isLoggedIn &&
      <div className={s.header__wrapper}>
        <div className={s.header__button} onClick={this.props.deleteLoginUser}>Exit</div>
      </div>
    ) || (
      <div className={s.header__wrapper}>
        <div className={s.header__button}>Registration</div>
        <div className={s.header__button}>Login</div>
      </div>
    )
  }
}

export default HeaderWrapper