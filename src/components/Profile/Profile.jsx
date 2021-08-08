import s from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../loc/Preloader/Preloader";


const Profile = ({getProfileUser, ...props}) => {
  const userId = props.match.params.userId || props.idCurrentUser
  useEffect(() => getProfileUser(userId), [userId, getProfileUser])
  return ( props.hasUser &&
    <div className={s.profile}>
      <ProfileInfoContainer />
      <PostWrapperContainer />
    </div>
  ) || ( userId &&
    <div className={s.preloader}>
      <Preloader />
    </div>
  ) || (
    <Redirect to={"/login"}/>
  )
}

export default Profile