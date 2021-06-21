import c from "./ProfilePosts.module.css"
import NewPost from './../NewPost/NewPost';
import Post from './../Post/Post';

const ProfilePosts = () => {
  return ( 
    <div>
      <div className={c.mypost__wrapper}>
        <div className={c.mypost__title}>My posts</div>
        <NewPost/>
      </div>
      <Post />
    </div>
  )
}

export default ProfilePosts