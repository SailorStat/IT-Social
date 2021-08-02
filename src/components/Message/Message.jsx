import s from "./Message.module.css"
import Avatar from "../../loc/Avatar/Avatar";
import { NavLink } from "react-router-dom";

const Message = (props) => {
  if (props.fromCurrentUser) {
    return (
      <div className={s.message + " " + s.outgoing}>
        <div className={s.message__date + " " + s.outgoing}>{props.date}</div>
        <div className={s.message__data + " " + s.outgoing}>
          <NavLink to={"/profile/" + props.loginUser} className={s.message__author + " " + s.outgoing}>{props.fullName}</NavLink>
          <div className={s.message__text + " " + s.outgoing}>{props.message}</div>
        </div>
        <div className={s.userPhoto + " " + s.outgoing}>
          <Avatar avatar={props.userPhoto} userid={props.loginUser}/>
        </div>
      </div>
    )
  }
  
  return (
    <div className={s.message}>
      <div className={s.userPhoto}>
          <Avatar avatar={props.userPhoto} userid={props.checkedDialog}/>
      </div>
      <div className={s.message__data}>
        <NavLink to={"/profile/" + props.checkedDialog} className={s.message__author + " " + s.outgoing}>{props.fullName}</NavLink>
        <div className={s.message__text}>{props.message}</div>
      </div>
      <div className={s.message__date}>
        {props.date}
      </div>
    </div>
  )
}

export default Message