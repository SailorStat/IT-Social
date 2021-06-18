import c from"./Profile.module.css"
import ProfileInfo from './../ProfileInfo/ProfileInfo';
import ProfilePosts from './../ProfilePosts/ProfilePosts';

const Profile = () => {
  return (
    <div className={c.profile}>
      <ProfileInfo />
      <ProfilePosts />
    </div>
  )
}

export default Profile