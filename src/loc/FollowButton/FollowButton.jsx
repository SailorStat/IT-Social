import s from "./FollowButton.module.css"
import { useHistory } from "react-router-dom";

const FollowButton = (props) => {
  const buttonTitle = props.followed ? "followed" : "follow"
  const buttonStyle = props.followed ? s.active : ""
  const isDisabled = props.inFollowToggle.some(el => el === props.userId)
  const history = useHistory()

  const onToggleFollow = () => {
    props.isLogin ? props.toggleFollow(props.userId, props.followed) : history.push("/login")
  }

  return (
    <button className={s.follow__button + " " + buttonStyle} onClick={onToggleFollow} disabled={isDisabled}>{buttonTitle}</button>
  )
}

export default FollowButton