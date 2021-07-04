import noAvatar from "./../../assets/img/no-avatar.png"
import userPhoto from "./../../assets/img/userPhoto.jpg"
import ProfileInfo from "./ProfileInfo";
import StoreContext from "./../../StoreContext";


const ProfileInfoContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => (
        <ProfileInfo fullName={store.getState().profilePage.users[17725].profileStats.fullName} status={store.getState().profilePage.users[17725].status} avatar={store.getState().profilePage.users[17725].avatar || noAvatar}/>
      )}
    </StoreContext.Consumer>
  )
}

export default ProfileInfoContainer