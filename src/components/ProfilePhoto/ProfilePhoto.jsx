import s from "./ProfilePhoto.module.css"
import imageBlobCreator from "./../../assets/scripts/imageBlobCreator";

const ProfilePhoto = (props) => {
  const matchId = props.match.params.userId
  const isCurrentUserProfile = !matchId || +matchId === props.currentUserId

  const putPhoto = (event) => {
    props.putNewPhoto(imageBlobCreator(event))
  }

  return (
    <div className={s.photo__wrapper}>
      <div className={s.profile__photo}>
        <img src={props.photo} alt="" />
      </div>
      {
        isCurrentUserProfile && (
          <label className={s.input__wrapper}>
            <div className={s.input__placeholder}><span>Enter new photo</span></div>
            <input type="file" accept="image/*" className={s.photo__input} onChange={putPhoto}/>
          </label>
        )
      }
    </div>
  )
}

export default ProfilePhoto