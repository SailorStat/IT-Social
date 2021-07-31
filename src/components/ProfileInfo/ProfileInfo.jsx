import s from "./ProfileInfo.module.css"
import ProfileStatListContainer from "../ProfileStatList/ProfileStatListContainer";
import StatusContainer from "./../Status/StatusContainer";


const ProfileInfo = (props) => {
  return (
    <div className={s.profile__info}>
      <div className={s.profile__description}>
        <div className={s.profile__name}>{props.fullName}</div>
        <StatusContainer />
        <ProfileStatListContainer />
      </div>
      <div className={s.profile__photo}>
        <img src={props.photo} alt="" />
      </div>
    </div>
  )
}

export default ProfileInfo