import { connect } from "react-redux";
import Profile from "./Profile";
import { setUser } from "../../redux/redux-store";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    currentUserPage,
    hasData: state.profilePage.users[currentUserPage]
  }
}

const mapDispatchToProps = { setUser }

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer