import s from "./ProfileStat.module.css"

const ProfileStat = (props) => {
  return (
    <div className={s.profile__stat + (props.subProfileStat ? " " + s.subprofile__stat : "")}>
      <span className={s.stat__name}>{props.property + ": "}</span>
      {props.subProfileStat && props.isEditMode && <span className={s.link__warning}>the field accepts only links</span>}
      {
        !props.isEditMode 
          ? <span className={s.stat__property}>{props.value}</span>
          : (["Looking for a job"].includes(props.property)
            ? <select className={s.stat__select} defaultValue={props.value} keyonstate={props.propertyName} onChange={props.editState} property={props.property} subprofilestat={`${props.subProfileStat}`}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            : <input className={s.stat__input} defaultValue={props.value} keyonstate={props.propertyName} onChange={props.editState}  property={props.property} subprofilestat={`${props.subProfileStat}`}/>
      )}
    </div>
  )
}

export default ProfileStat