import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import React from "react";
import axios from "axios";
import Preloader from "../../assets/img/Preloader.svg"

class Profile extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.currentUserPage}`)
      .then(response => {
        this.props.setUser(response)
      })
  }

  render() {
    if (!this.props.hasData) {
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