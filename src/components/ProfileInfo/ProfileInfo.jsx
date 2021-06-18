import c from "./ProfileInfo.module.css"
import NoAvatar from "./../../assets/no-avatar.png"
import ProfileStat from './../ProfileStat/ProfileStat';

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

const initialArrState = ["About Me", "Contacts", "Looking for a job", "Looking for a job description"]

function profileStatCreator(el, index) {
  if (["fullName", "userId"].includes(el)) return
  if (!initialState[el]) return
  if (typeof initialState[el] !== "object") return <ProfileStat key={el} property={initialArrState[index]} subProfileStat={false} value={initialState[el]}/>
  return [<ProfileStat key={el} property={initialArrState[index]} value={""} />, 
    Object.keys(initialState[el]).map((elm, index) => <ProfileStat key={elm} property={elm} subProfileStat={true} value={initialState[el][elm]}/>)
  ]
}

const ProfileInfo = () => {
  return (
    <div className={c.profile__info}>
      <div className={c.profile__description}>
        <div className={c.profile__name}>{initialState.fullName}</div>
        <div className={c.profile__status}>Live is perfect</div>
        {
          Object.keys(initialState).map((el, index) => profileStatCreator(el, index))
        }
      </div>
      <div className={c.profile__photo}>
        <img src={NoAvatar} alt="" />
      </div>
    </div>
  )
}

export default ProfileInfo