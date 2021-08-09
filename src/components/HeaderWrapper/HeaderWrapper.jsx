import s from "./HeaderWrapper.module.css"
import React from "react";
import { useHistory } from "react-router-dom";
import AcceptButton from "../../loc/AcceptButton/AcceptButton";


const HeaderWrapper = (props) => {
  const history = useHistory()

  const loginRedirect = () => {
    history.push("/login")
  }

  return ( props.isLoggedIn &&
    <div className={s.header__wrapper}>
      <AcceptButton callBackFunc={props.deleteLoginUser} buttonTitle="Exit"/>
    </div>
  ) || (
    <div className={s.header__wrapper}>
      <AcceptButton callBackFunc={() => {}} buttonTitle="Registration"/>
      <AcceptButton callBackFunc={loginRedirect} buttonTitle="Login"/>
    </div>
  )
}

export default HeaderWrapper