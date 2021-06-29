import ProfileStat from "./ProfileStat"
import StateContext from "./../../StateContext";

function profileStatCreator(state, el, index) {
  if (["fullName", "userId"].includes(el)) return

  if (!state.users[17725].profileStats[el]) return

  if (typeof state.users[17725].profileStats[el] !== "object") {
    return <ProfileStat key={"ProfileStat" + el} property={state.userStats[index]} subProfileStat={false} value={state.users[17725].profileStats[el]}/>
  }
  
  return [
    <ProfileStat key={"ProfileStat" + el} property={state.userStats[index]} value={""} />, 
    Object.keys(state.users[17725].profileStats[el]).map(elm => <ProfileStat key={"ProfileStat" + elm} property={elm} subProfileStat={true} value={state.users[17725].profileStats[el][elm]}/>)
  ]
}


const ProfileStatContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <>
          {
            Object.keys(state.users[17725].profileStats).map((el, index) => profileStatCreator(state, el, index))
          }
        </>
      )}
    </StateContext.Consumer>
  )
}

export default ProfileStatContainer