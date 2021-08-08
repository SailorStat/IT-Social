import s from "./FollowWrapper.module.css"
import FollowListContainer from "../FollowList/FollowListContainer";
import PaginatorContainer from "./../Paginator/PaginatorContainer";
import Preloader from "../../loc/Preloader/Preloader";

const FollowWrapper = (props) => {
  return(
    <div className={"content__wrapper " + s.follow__wrapper + " " + props.isFetching}>
      <div className={s.follow__preloader + " " + props.isFetching}>
        <Preloader />
      </div>
      <FollowListContainer />
      <PaginatorContainer />
    </div>
  )
}

export default FollowWrapper