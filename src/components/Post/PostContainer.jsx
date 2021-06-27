import c from "./Post.module.css"
import NoAvatar from "./../../assets/no-avatar.png"
// import Placeholder from "./../../assets/placeholder.jpg"
import Post from "./Post";
import userPhoto from "../../assets/userPhoto.jpg"

const initialState = [{
  userId: 17725,
  postId: 1234,
  authorFullName: "Sailor Stat",
  postDate: "11.03.2021 13:15",
  postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nam velit ad magni fugit enim corrupti eaque harum. Molestiae et, laboriosam neque hic odio velit ipsam porro consectetur dolore ipsa, iusto quia libero? Reprehenderit doloribus molestias nulla tempora suscipit!",
  likeCount: 34,
  currentUserLiked: false,
  repostCount: 15,
  currentUserReposted: false,
  avatar: userPhoto
}, {
  userId: 17725,
  postId: 1234,
  authorFullName: "Sailor Stat",
  postDate: "12.03.2021 13:56",
  postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nam velit!",
  likeCount: 23,
  currentUserLiked: true,
  repostCount: 9,
  currentUserReposted: true
}, {
  userId: 17725,
  postId: 1234,
  authorFullName: "Sailor Stat",
  postDate: "13.03.2021 13:23",
  postText: "Lorem ipsum dolor sit amet consectetur",
  likeCount: 27,
  currentUserLiked: true,
  repostCount: 11,
  currentUserReposted: false,
  avatar: userPhoto
}]

const PostContainer = () => {
  return (
    <>
      {initialState.map(el => <Post key={el.postId}
                                    userId={el.userId}
                                    authorFullName={el.authorFullName}
                                    postDate={el.postDate}
                                    postText={el.postText}
                                    likeCount={el.likeCount}
                                    currentUserLiked={el.currentUserLiked}
                                    repostCount={el.repostCount}
                                    currentUserReposted={el.currentUserReposted}
                                    avatar={el.avatar || NoAvatar}/>)
      }
    </>
  )
}

export default PostContainer