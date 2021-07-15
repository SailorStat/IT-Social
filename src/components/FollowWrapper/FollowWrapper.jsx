import c from "./FollowWrapper.module.css"
import FollowListContainer from "../FollowList/FollowListContainer";
import PaginatorContainer from "./../Paginator/PaginatorContainer";
import Preloader from "../../assets/img/Preloader.svg"

const FollowWrapper = (props) => {
  return(
    <div className={"content__wrapper " + c.follow__wrapper + " " + props.isFetching}>
      <div className={c.follow__preloader + " " + props.isFetching}>
        <img src={Preloader} alt="" />
      </div>
      <FollowListContainer />
      <PaginatorContainer />
    </div>
  )
}

export default FollowWrapper