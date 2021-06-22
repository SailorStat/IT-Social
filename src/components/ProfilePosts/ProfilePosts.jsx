import c from "./ProfilePosts.module.css"
import TextCreator from './../TextCreator/TextCreator';
import Post from './../Post/Post';

const ProfilePosts = () => {
  return ( 
    <div>
      <div className="content__wrapper">
        <div className={c.mypost__title}>My posts</div>
        <TextCreator/>
      </div>
      <Post />
    </div>
  )
}

export default ProfilePosts