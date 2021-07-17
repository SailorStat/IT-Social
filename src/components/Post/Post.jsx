import c from "./Post.module.css"
// import Placeholder from "../../assets/img/placeholder.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import Avatar from "./../Avatar/Avatar";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  return (
    <div className={"content__wrapper " + c.post}>
      <div className={c.post__header}>
        <Avatar avatar={props.photo} userid={props.userId}/>
        <div className={c.post__info}>
          <NavLink to={"/profile/" + props.userId} className={c.user__name}>{props.authorFullName}</NavLink>
          <div className={c.post__date}>{props.postDate}</div>
        </div>
      </div>
      <div className={c.post__body}>
        <div className={c.post__text}>{props.postText}</div>
        {/* <div className={c.post__image}>
          <img src={Placeholder} alt="" />
        </div> */}
      </div>
      <div className={c.post__activity}>
        <span className={c.like + " " + (props.currentUserLiked ? c.active : "")}>
          <span className={c.symbol}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className={c.count}>{props.likeCount}</span>
        </span>
        <span className={c.repost + " " + props.currentUserReposted}>
          <span className={c.symbol}>
            <FontAwesomeIcon icon={faShareSquare} />
          </span>
          <span className={c.count}>{props.repostCount}</span>
        </span>
      </div>
    </div>
  )
}

export default Post