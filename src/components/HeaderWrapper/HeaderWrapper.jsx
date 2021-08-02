import s from "./HeaderWrapper.module.css"
import React from "react";
import { NavLink } from "react-router-dom";

const HeaderWrapper = (props) => {
  return ( props.isLoggedIn &&
    <div className={s.header__wrapper}>
      <div className={s.header__button} onClick={props.deleteLoginUser}>Exit</div>
    </div>
  ) || (
    <div className={s.header__wrapper}>
      <div className={s.header__button}>Registration</div>
      <NavLink key="login" to="/login" className={s.header__button}>Login</NavLink>
    </div>
  )
}

export default HeaderWrapper