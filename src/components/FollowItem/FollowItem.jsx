import c from "./FollowItem.module.css"
import Avatar from "./../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import { toggleFollowAPI } from "../../API";

const FollowItem = (props) => {
  const onToggleFollow = () => {
    toggleFollowAPI(props.userId, props.followed)
      .then(resultCode => resultCode === 0 && props.toggleFollow(props.userId, props.followed))
  }

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
          <button className={c.follow__button + " " + props.buttonStyle} onClick={onToggleFollow}>{props.buttonTitle}</button>
          <div className={c.user__status}>{props.status}</div>
        </div>
      </div>
    </div>
  )
}

export default FollowItem