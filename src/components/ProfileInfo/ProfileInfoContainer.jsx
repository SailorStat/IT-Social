import noAvatar from "./../../assets/no-avatar.png"
import userPhoto from "./../../assets/userPhoto.jpg"
import ProfileInfo from "./ProfileInfo";
import StateContext from "./../../StateContext";

const initialState = {
  fullName: "Sailor Stat",
  status: "Live is perfect",
  avatar: userPhoto
}

const ProfileInfoContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <ProfileInfo fullName={state.profilePage.users[17725].profileStats.fullName} status={state.profilePage.users[17725].status} avatar={state.profilePage.users[17725].avatar || noAvatar}/>
      )}
    </StateContext.Consumer>
  )
}

export default ProfileInfoContainer