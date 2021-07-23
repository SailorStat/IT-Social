import { connect } from "react-redux";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { getProfileUser } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginPage.loginUser,
    hasUser: state.profilePage.users[state.profilePage.currentUserPage]
  }
}

const mapDispatchToProps = { getProfileUser }

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default ProfileContainerWithRouter