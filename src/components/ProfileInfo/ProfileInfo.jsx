import s from "./ProfileInfo.module.css"
import ProfileStatListContainer from "../ProfileStatList/ProfileStatListContainer";
import StatusContainer from "./../Status/StatusContainer";
import ProfilePhotoContainer from "../ProfilePhoto/ProfilePhotoContainer";


const ProfileInfo = (props) => {
  return (
    <div className={s.profile__info}>
      <div className={s.profile__description}>
        <div className={s.profile__name}>{props.fullName}</div>
        <StatusContainer />
        <ProfileStatListContainer />
      </div>
      <ProfilePhotoContainer />
    </div>
  )
}

export default ProfileInfo