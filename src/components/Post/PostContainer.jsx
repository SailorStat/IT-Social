import NoAvatar from "./../../assets/img/no-avatar.png"
// import Placeholder from "./../../assets/img/placeholder.jpg"
import Post from "./Post";
import userPhoto from "../../assets/img/userPhoto.jpg"
import StoreContext from "./../../StoreContext";

const PostContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <>
          {store.getState().profilePage.posts["17725"]?.map(el => <Post key={"Post" + el.postId}
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
      )}
    </StoreContext.Consumer>
  )
}

export default PostContainer