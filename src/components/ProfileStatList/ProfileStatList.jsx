import ProfileStat from "../ProfileStat/ProfileStat"

function profileStatCreator(el, index, profileStats, userStats) {
  if (["fullName", "userId"].includes(el)) return
  
  if (!profileStats[el]) return

  if (typeof profileStats[el] !== "object") {
    return <ProfileStat key={"ProfileStat" + el} property={userStats[index]} subProfileStat={false} value={profileStats[el]}/>
  }
  
  return [
    <ProfileStat key={"ProfileStat" + el} property={userStats[index]} value={""} />, 
    Object.keys(profileStats[el]).map(elm => <ProfileStat key={"ProfileStat" + elm} property={elm} subProfileStat={true} value={profileStats[el][elm]}/>)
  ]
}


const ProfileStatList = (props) => {
  return (
    <>
      {
        Object.keys(props.profileStats).map((el, index) => profileStatCreator(el, index, props.profileStats, props.userStats))
      }
    </>
  )
}

export default ProfileStatList