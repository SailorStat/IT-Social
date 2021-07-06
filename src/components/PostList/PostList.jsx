import c from "../Post/Post.module.css"
import Post from "../Post/Post";


const PostList = (props) => {
  const giveActive = (arg) => {
    if (arg) return c.active
    return ""
  }
  return (
    <>
      {props.posts.map(el => <Post key={"Post" + el.postId}
                                        userId={el.userId}
                                        authorFullName={el.authorFullName}
                                        postDate={el.postDate}
                                        postText={el.postText}
                                        likeCount={el.likeCount}
                                        currentUserLiked={giveActive(el.currentUserLiked)}
                                        repostCount={el.repostCount}
                                        currentUserReposted={giveActive(el.currentUserReposted)}
                                        avatar={el.avatar}/>)}
    </>
  )
}

export default PostList