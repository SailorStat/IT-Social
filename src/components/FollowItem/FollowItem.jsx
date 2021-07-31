import s from "./FollowItem.module.css"
import Avatar from "../../loc/Avatar/Avatar";
import { NavLink } from "react-router-dom";

const FollowItem = (props) => {
  const onToggleFollow = () => {
    props.toggleFollow(props.userId, props.followed)
  }

  return (
    <div className={s.follow__item}>
      <Avatar avatar={props.photo} userid={props.userId}/>
      <div className={s.follow_info}>
        <div className={s.user__info}>
          <div className={s.user__condition}>
            <NavLink to={"/profile/" + props.userId} className={s.user__name}>{props.fullName}</NavLink>
            <span className={s.user__location}>{props.location}</span>
            <span className={s.wanted + " " + props.styleCurrentUser}>This is how other users see you</span>
          </div>
          <button className={s.follow__button + " " + props.buttonStyle} onClick={onToggleFollow} disabled={props.isDisabled}>{props.buttonTitle}</button>
          <div className={s.user__status}>{props.status}</div>
        </div>
      </div>
    </div>
  )
}

export default FollowItem