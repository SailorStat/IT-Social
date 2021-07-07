import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";

const Profile = () => {
  return (
    <div className={c.profile}>
      <ProfileInfoContainer />
      <PostWrapperContainer />
    </div>
  )
}

export default Profile