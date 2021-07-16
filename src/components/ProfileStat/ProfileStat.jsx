import c from "./ProfileStat.module.css"

const ProfileStat = (props) => {
  return (
    <div className={c.profile__stat + (props.subProfileStat ? " " + c.subprofile__stat : "")}>
      <span className={c.stat__name}>{props.property + ": "}</span>
      <span className={c.stat__property}>{props.value || "not specified"}</span>
    </div>
  )
}

export default ProfileStat