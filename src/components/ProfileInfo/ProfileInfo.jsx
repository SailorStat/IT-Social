import s from "./ProfileInfo.module.css"
import ProfileStatListContainer from "../ProfileStatList/ProfileStatListContainer";
import StatusContainer from "./../Status/StatusContainer";
import ProfilePhotoContainer from "../ProfilePhoto/ProfilePhotoContainer";
import WriteMessageButton from "../../loc/WriteMessageButton/WriteMessageButton";
import FollowButton from "../../loc/FollowButton/FollowButton";


const ProfileInfo = (props) => {
  const matchId = +props.match.params.userId
  const isOtherUser = !!matchId && matchId !== props.currentUserId
  return (
    <div className={s.profile__info}>
      <div className={s.profile__description}>
        <div className={s.profile__name}>{props.fullName}</div>
        <StatusContainer />
        <ProfileStatListContainer />
      </div>
      <div className={s.profile__item}>
        <ProfilePhotoContainer />
        { isOtherUser && <FollowButton followed={props.isFollow} inFollowToggle={props.inFollowToggle} toggleFollow={props.toggleFollow} userId={matchId} isLogin={props.currentUserId}/> }
        { props.isFollow && isOtherUser && <WriteMessageButton userId={matchId} putDialog={props.putDialog}/> }
      </div>
    </div>
  )
}

export default ProfileInfo