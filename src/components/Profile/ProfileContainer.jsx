import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/redux-store";
import { withRouter } from "react-router-dom";
import { setCurrentUserPage } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginPage.loginUser,
    hasUser: state.profilePage.users[state.profilePage.currentUserPage]
  }
}

const mapDispatchToProps = { setUser, setCurrentUserPage }

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

const ProfileContainerWithRouter = withRouter(ProfileContainer)

export default ProfileContainerWithRouter