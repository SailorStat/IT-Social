import c from "./ProfileInfo.module.css"
import ProfileStatListContainer from "../ProfileStatList/ProfileStatListContainer";
import StatusContainer from "./../Status/StatusContainer";


const ProfileInfo = (props) => {
  return (
    <div className={c.profile__info}>
      <div className={c.profile__description}>
        <div className={c.profile__name}>{props.fullName}</div>
        <StatusContainer />
        <ProfileStatListContainer />
      </div>
      <div className={c.profile__photo}>
        <img src={props.photo} alt="" />
      </div>
    </div>
  )
}

export default ProfileInfo