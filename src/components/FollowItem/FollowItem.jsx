import c from "./FollowItem.module.css"
import Avatar from "./../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import axios from "axios";

const FollowItem = (props) => {
  const toggleFollowAPI = () => {
    const endPoint = `https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`
    const options = {
      withCredentials: true,
      headers: {
        "API-KEY": "529b037a-4944-4887-8582-929139b7810c"
      }
    }
    const request = props.followed ? axios.delete(endPoint, options) : axios.post(endPoint, {}, options)
    request.then(response => {
        response.data.resultCode === 0 && props.toggleFollow(props.userId, props.followed)})
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
          <button className={c.follow__button + " " + props.buttonStyle} onClick={toggleFollowAPI}>{props.buttonTitle}</button>
          <div className={c.user__status}>{props.status}</div>
        </div>
      </div>
    </div>
  )
}

export default FollowItem