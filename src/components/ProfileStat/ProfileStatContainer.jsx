import ProfileStat from "./ProfileStat"
import StoreContext from "./../../StoreContext";

function profileStatCreator(store, el, index) {
  if (["fullName", "userId"].includes(el)) return
  
  const pages = store.getState().profilePage
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
    <StoreContext.Consumer>
      {store => (
        <>
          {
            Object.keys(store.getState().profilePage.users[17725].profileStats).map((el, index) => profileStatCreator(store, el, index))
          }
        </>
      )}
    </StoreContext.Consumer>
  )
}

export default ProfileStatContainer