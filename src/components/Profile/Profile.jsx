import c from"./Profile.module.css"
import PostWrapper from "./../ProfilePosts/PostWrapper";
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";

const Profile = () => {
  return (
    <div className={c.profile}>
      <ProfileInfoContainer />
      <PostWrapper />
    </div>
  )
}

export default Profile