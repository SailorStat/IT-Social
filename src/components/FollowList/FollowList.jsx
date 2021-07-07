import c from "./FollowList.module.css"
import FollowItem from "./../FollowItem/FollowItem";

const FollowList = (props) => {
  return (
    <div className={c.follow__list}>
      <FollowItem />
    </div>
  )
}

export default FollowList