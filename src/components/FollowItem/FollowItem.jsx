import c from "./FollowItem.module.css"
import Avatar from "./../Avatar/Avatar";
import { NavLink } from "react-router-dom";

const FollowItem = (props) => {
  return (
    <div className={c.follow__item}>
      <Avatar avatar={props.photo} userid={props.userId}/>
      <div className={c.follow_info}>
        <div className={c.user__info}>
          <div className={c.user__condition}>
            <NavLink to={"/profile/" + props.userId} className={c.user__name}>{props.fullName}</NavLink>
            <span className={c.user__location}>{props.location}</span>
            <span className={c.wanted + " " + props.styleCurrentUser}>This is how other users see you</span>
          </div>
          <button className={c.follow__button + " " + props.buttonStyle} onClick={props.toggleFollow} userid={props.userId} followed={props.followed.toString()}>{props.buttonTitle}</button>
          <div className={c.user__status}>{props.status}</div>
        </div>
      </div>
    </div>
  )
}

export default FollowItem