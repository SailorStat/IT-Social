import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import React from "react";
import axios from "axios";
import Preloader from "../../assets/img/Preloader.svg"

class Profile extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.loginUser.id
    this.props.setCurrentUserPage(userId)
    Promise.all([axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`),
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`)])
      .then(response => {
        this.props.setUser(response)
      })
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