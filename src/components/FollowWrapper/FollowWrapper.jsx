import c from "./FollowWrapper.module.css"
import FollowListContainer from "../FollowList/FollowListContainer";
import PaginatorContainer from "./../Paginator/PaginatorContainer";

const FollowWrapper = () => {
  return(
    <div className={"content__wrapper " + c.follow__wrapper}>
      <FollowListContainer />
      <PaginatorContainer />
    </div>
  )
}

export default FollowWrapper