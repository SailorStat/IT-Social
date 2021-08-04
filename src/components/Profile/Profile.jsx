import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import Preloader from "../../assets/img/Preloader.svg"
import { Redirect } from "react-router-dom";
import { useEffect } from "react";


const Profile = ({getProfileUser, ...props}) => {
  const userId = props.match.params.userId || props.idCurrentUser
  useEffect(() => getProfileUser(userId), [userId, getProfileUser])

  return ( props.hasUser &&
    <div className={c.profile}>
      <ProfileInfoContainer />
      <PostWrapperContainer />
    </div>
  ) || ( userId &&
    <img src={Preloader} alt="" />
  ) || (
    <Redirect to={"/login"}/>
  )
}

export default Profile