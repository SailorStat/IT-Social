import c from "./ProfileStat.module.css"

const ProfileStat = (props) => {
  return (
    <div className={c.profile__stat + (props.subProfileStat ? " " + c.subprofile__stat : "")}>
      <span className={c.stat__name}>{props.property + ": "}</span>
      {
        !props.isEditMode 
          ? <span className={c.stat__property}>{props.value}</span>
          : (["Looking for a job"].includes(props.property)
            ? <select className={c.stat__select} defaultValue={props.value} keyonstate={props.propertyName} onChange={props.editState} property={props.property} subprofilestat={`${props.subProfileStat}`}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
            : <input className={c.stat__input} defaultValue={props.value} keyonstate={props.propertyName} onChange={props.editState}  property={props.property} subprofilestat={`${props.subProfileStat}`}/>
      )}
    </div>
  )
}

export default ProfileStat