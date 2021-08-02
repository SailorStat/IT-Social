import c from"./Profile.module.css"
import ProfileInfoContainer from "../ProfileInfo/ProfileInfoContainer";
import PostWrapperContainer from "../PostWrapper/PostWrapperContainer";
import React from "react";
import Preloader from "../../assets/img/Preloader.svg"
import { Redirect } from "react-router-dom";

class Profile extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || this.props.idCurrentUser
    userId ? this.props.getProfileUser(userId) : this.props.getIdCurrentUser()
  }

  render() {
    if (!this.props.hasUser && this.props.initialize) {
      return (
        <Redirect to={"/login"}/>
      )
    }

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