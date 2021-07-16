import c from "./Message.module.css"
import Avatar from "./../Avatar/Avatar";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  if (props.fromCurrentUser) {
    return (
      <div className={c.message + " " + c.outgoing}>
        <div className={c.message__date + " " + c.outgoing}>
          {props.date}
        </div>
        <div className={c.message__data + " " + c.outgoing}>
          <NavLink to={"/profile/" + props.loginUser} onClick={props.setCurrentUserPage} userid={props.loginUser} className={c.message__author + " " + c.outgoing}>{props.fullName}</NavLink>
          <div className={c.message__text + " " + c.outgoing}>{props.message}</div>
        </div>
        <div className={c.userPhoto + " " + c.outgoing}>
          <Avatar avatar={props.userPhoto} userid={props.loginUser} setCurrentUserPage={props.setCurrentUserPage}/>
        </div>
      </div>
    )
  }
  
  return (
    <div className={c.message}>
      <div className={c.userPhoto}>
          <Avatar avatar={props.userPhoto} userid={props.checkedDialog} setCurrentUserPage={props.setCurrentUserPage}/>
      </div>
      <div className={c.message__data}>
        <NavLink to={"/profile/" + props.checkedDialog} onClick={props.setCurrentUserPage} userid={props.checkedDialog} className={c.message__author + " " + c.outgoing}>{props.fullName}</NavLink>
        <div className={c.message__text}>{props.message}</div>
      </div>
      <div className={c.message__date}>
        {props.date}
      </div>
    </div>
  )
}

export default Message