import s from "./Post.module.css"
// import Placeholder from "../../assets/img/placeholder.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import Avatar from "../../loc/Avatar/Avatar";
import { NavLink } from "react-router-dom";

const Post = (props) => {
  return (
    <div className={"content__wrapper " + s.post}>
      <div className={s.post__header}>
        <Avatar avatar={props.photo} userid={props.userId}/>
        <div className={s.post__info}>
          <NavLink to={"/profile/" + props.userId} className={s.user__name}>{props.authorFullName}</NavLink>
          <div className={s.post__date}>{props.postDate}</div>
        </div>
      </div>
      <div className={s.post__body}>
        <div className={s.post__text}>{props.postText}</div>
        {/* <div className={s.post__image}>
          <img src={Placeholder} alt="" />
        </div> */}
      </div>
      <div className={s.post__activity}>
        <span className={s.like + " " + (props.currentUserLiked ? s.active : "")}>
          <span className={s.symbol}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className={s.count}>{props.likeCount}</span>
        </span>
        <span className={s.repost + " " + props.currentUserReposted}>
          <span className={s.symbol}>
            <FontAwesomeIcon icon={faShareSquare} />
          </span>
          <span className={s.count}>{props.repostCount}</span>
        </span>
      </div>
    </div>
  )
}

export default Post