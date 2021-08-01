import ProfileStat from "../ProfileStat/ProfileStat"
import c from "./ProfileStatList.module.css"

let state = null

function profileStatCreator(el, index, profileStats, userStats, isEditMode) {
  if (["fullName", "userId", "photos", "status"].includes(el)) return
  
  const elValue = profileStats[el]
  if (!elValue && !isEditMode) return


  state = {...profileStats}
  const editState = (event) => {
    const prop = event.target.attributes.keyonstate.value
    const value = event.target.value
    const isSubStat = event.target.attributes.subprofilestat.value === "true"
    if (isSubStat) {
      state = {
        ...state,
        contacts: {
          ...state.contacts,
          [prop]: value
        }
      }
    } else {
        state = {
        ...state,
        [prop]: value
      }
    }
    return
  }

  if (typeof elValue !== "object" || elValue === null) {
    return <ProfileStat key={"ProfileStat" + el}
                        propertyName={`${el}`}
                        property={userStats[index]}
                        subProfileStat={false}
                        value={`${elValue}`}
                        isEditMode={isEditMode}
                        editState={editState}/>
  }

  return [
    <ProfileStat key={"ProfileStat" + el} propertyName={`${el}`} property={userStats[index]} value={""}/>,
    Object.keys(elValue).map(elm => (elValue[elm] || isEditMode) && <ProfileStat key={"ProfileStat" + elm}
                                                                    propertyName={`${elm}`}
                                                                    property={elm}
                                                                    subProfileStat={true}
                                                                    value={elValue[elm]}
                                                                    isEditMode={isEditMode}
                                                                    editState={editState}/> )
  ]
}


const ProfileStatList = (props) => {
  return (
    <>
      {
        props.isLoggedIn && !props.match.params.userId && !props.isEditMode && <div className={c.edit__button} onClick={props.setEditStats}>edit info</div>
      }
      {
        Object.keys(props.profileStats).map((el, index) => profileStatCreator(el, index, props.profileStats, props.userStats, props.isEditMode))
      }
      {
        !props.match.params.userId && props.isEditMode && (
          <div className={c.button__wrapper}>
            <button className={c.button + " " + c.button__cancel} onClick={props.unsetEditStats}>Cancel</button>
            <button className={c.button} onClick={() => props.pullNewStats(state, props.loginUserId)}>Save</button>
          </div>
        )
      }
    </>
  )
}

export default ProfileStatList