import noAvatar from "./../../assets/no-avatar.png"
import userPhoto from "./../../assets/userPhoto.jpg"
import ProfileInfo from "./ProfileInfo";

const initialState = {
  fullName: "Sailor Stat",
  status: "Live is perfect",
  avatar: userPhoto
}

const ProfileInfoContainer = () => {
  return (
    <ProfileInfo fullName={initialState.fullName} status={initialState.status} avatar={initialState.avatar || noAvatar}/>
  )
}

export default ProfileInfoContainer