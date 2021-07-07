import c from "./FollowWrapper.module.css"
import FollowListContainer from "../FollowList/FollowListContainer";

const FollowWrapper = () => {
  return(
    <div className={"content__wrapper " + c.follow__wrapper}>
      <FollowListContainer />
      <div>Pagination</div>
    </div>
  )
}

export default FollowWrapper