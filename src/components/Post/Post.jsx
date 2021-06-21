import c from "./Post.module.css"
import NoAvatar from "./../../assets/no-avatar.png"
import Placeholder from "./../../assets/placeholder.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';

const initialState = {
  userId: 17725,
  postId: 1234,
  authorFullName: "Sailor Stat",
  postDate: "12.03.2021 13:15",
  postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nam velit ad magni fugit enim corrupti eaque harum. Molestiae et, laboriosam neque hic odio velit ipsam porro consectetur dolore ipsa, iusto quia libero? Reprehenderit doloribus molestias nulla tempora suscipit!",
  likeCount: 23,
  currentUserLiked: true,
  repostCount: 9,
  currentUserReposted: false
}

const Post = () => {
  return (
    <div className={c.post}>
      <div className={c.post__header}>
        <div className={c.user__smallphoto}>
          <img src={NoAvatar} alt="" />
        </div>
        <div className={c.post__info}>
          <div className={c.user__name}>{initialState.authorFullName}</div>
          <div className={c.post__date}>{initialState.postDate}</div>
        </div>
      </div>
      <div className={c.post__body}>
        <div className={c.post__text}>{initialState.postText}</div>
        {/* <div className={c.post__image}>
          <img src={Placeholder} alt="" />
        </div> */}
      </div>
      <div className={c.post__activity}>
        <span className={c.like + " " + (initialState.currentUserLiked ? c.active : "")}>
          <span className={c.symbol}>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className={c.count}>{initialState.likeCount}</span>
        </span>
        <span className={c.repost + " " + (initialState.currentUserReposted ? c.active : "")}>
          <span className={c.symbol}>
            <FontAwesomeIcon icon={faShareSquare} />
          </span>
          <span className={c.count}>{initialState.repostCount}</span>
        </span>
      </div>
    </div>
  )
}

export default Post