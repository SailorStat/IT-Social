import s from "./HeaderWrapper.module.css"
import React from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink key="login" to="/login" className={s.header__button}>Login</NavLink>
      </div>
    )
  }
}

export default HeaderWrapper