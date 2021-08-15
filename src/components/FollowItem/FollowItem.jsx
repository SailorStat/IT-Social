import s from "./FollowItem.module.css"
import Avatar from "../../loc/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import FollowButton from "../../loc/FollowButton/FollowButton";

const FollowItem = (props) => {
  const styleCurrentUser = props.userId === props.loginUser ? s.displayed : ""
  return (
    <div className={s.follow__item}>
      <Avatar avatar={props.photo} userid={props.userId}/>
      <div className={s.follow_info}>
        <div className={s.user__info}>
          <div className={s.user__condition}>
            <NavLink to={"/profile/" + props.userId} className={s.user__name}>{props.fullName}</NavLink>
            <span className={s.user__location}>{props.location}</span>
            <span className={s.wanted + " " + styleCurrentUser}>This is how other users see you</span>
          </div>
          <div className={s.follow__button}>
            <FollowButton followed={props.followed} inFollowToggle={props.inFollowToggle} toggleFollow={props.toggleFollow} userId={props.userId} isLogin={true}/>
          </div>
          <div className={s.user__status}>{props.status}</div>
        </div>
      </div>
    </div>
  )
}

export default FollowItem