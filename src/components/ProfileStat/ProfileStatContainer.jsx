import ProfileStat from "./ProfileStat"
import StateContext from "./../../StateContext";

function profileStatCreator(state, el, index) {
  if (["fullName", "userId"].includes(el)) return
  
  const pages = state.profilePage
  if (!pages.users[17725].profileStats[el]) return

  if (typeof pages.users[17725].profileStats[el] !== "object") {
    return <ProfileStat key={"ProfileStat" + el} property={pages.userStats[index]} subProfileStat={false} value={pages.users[17725].profileStats[el]}/>
  }
  
  return [
    <ProfileStat key={"ProfileStat" + el} property={pages.userStats[index]} value={""} />, 
    Object.keys(pages.users[17725].profileStats[el]).map(elm => <ProfileStat key={"ProfileStat" + elm} property={elm} subProfileStat={true} value={pages.users[17725].profileStats[el][elm]}/>)
  ]
}


const ProfileStatContainer = () => {
  return (
    <StateContext.Consumer>
      {state => (
        <>
          {
            Object.keys(state.profilePage.users[17725].profileStats).map((el, index) => profileStatCreator(state, el, index))
          }
        </>
      )}
    </StateContext.Consumer>
  )
}

export default ProfileStatContainer