import c from "./Post.module.css"
// import Placeholder from "./../../assets/placeholder.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';

const Post = (props) => {
  return (
    <div className={"content__wrapper " + c.post}>
      <div className={c.post__header}>
        <div className={c.user__smallphoto}>
          <img src={props.avatar} alt="" />
        </div>
        <div className={c.post__info}>
          <div className={c.user__name}>{props.authorFullName}</div>
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
        <span className={c.repost + " " + (props.currentUserReposted ? c.active : "")}>
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