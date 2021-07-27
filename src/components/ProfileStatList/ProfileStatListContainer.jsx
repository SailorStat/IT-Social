import { connect } from "react-redux";
import ProfileStatList from "./ProfileStatList";
import { withRouter } from "react-router-dom";
import { unsetEditStats, setEditStats, pullNewStats } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    profileStats: state.profilePage.users[currentUserPage],
    userStats: state.profilePage.userStats,
    isEditMode: state.profilePage.isEditMode,
    loginUserId: state.profilePage.loginUser.id
  }
}

const mapDispatchToProps = {
  unsetEditStats,
  setEditStats,
  pullNewStats
}

const ProfileStatListContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatList)
const ProfileStatListContainerWithRouter = withRouter(ProfileStatListContainer)

export default ProfileStatListContainerWithRouter