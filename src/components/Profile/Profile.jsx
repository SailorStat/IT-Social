import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import React from "react";
import Preloader from "../../assets/img/Preloader.svg"

class Profile extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.loginUser.id
    this.props.getProfileUser(userId)
  }

  render() {
    if (!this.props.hasUser) {
      return (
        <img src={Preloader} alt="" />
      )
    }

    return (
      <div className={c.profile}>
        <ProfileInfoContainer />
        <PostWrapperContainer />
      </div>
    )
  }
}

export default Profile