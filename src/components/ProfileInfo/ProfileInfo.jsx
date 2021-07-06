import c from "./ProfileInfo.module.css"
import ProfileStatListContainer from "./../ProfileStatList/ProfileStatListContainer";


const ProfileInfo = (props) => {
  return (
    <div className={c.profile__info}>
      <div className={c.profile__description}>
        <div className={c.profile__name}>{props.fullName}</div>
        <div className={c.profile__status}>{props.status}</div>
        <ProfileStatListContainer />
      </div>
      <div className={c.profile__photo}>
        <img src={props.avatar} alt="" />
      </div>
    </div>
  )
}

export default ProfileInfo