import ProfileStat from "./ProfileStat"

const initialState = {
  "aboutMe": "я крутой чувак",
  "contacts": {
    "skype": "skyp",
    "vk": "vk.com",
    "facebook": "facebook",
    "icq": "icq",
    "email": "email",
    "googlePlus": "gogep",
    "twitter": "twitter",
    "instagram": "instagra",
    "whatsApp": "watsapp"
  },
  "lookingForAJob": true,
  "lookingForAJobDescription": 'Ищу работу, знаю это, это и это',
  "fullName": "Sailor Stat",
  "userId": 17725
}

const initialStateArrName = ["About Me", "Contacts", "Looking for a job", "Looking for a job description"]


function profileStatCreator(el, index) {
  if (["fullName", "userId"].includes(el)) return

  if (!initialState[el]) return

  if (typeof initialState[el] !== "object") {
    return <ProfileStat key={el} property={initialStateArrName[index]} subProfileStat={false} value={initialState[el]}/>
  }
  
  return [
    <ProfileStat key={el} property={initialStateArrName[index]} value={""} />, 
    Object.keys(initialState[el]).map(elm => <ProfileStat key={elm} property={elm} subProfileStat={true} value={initialState[el][elm]}/>)
  ]
}


const ProfileStatContainer = () => {
  return (
    <>
    {
      Object.keys(initialState).map((el, index) => profileStatCreator(el, index))
    }
    </>
  )
}

export default ProfileStatContainer