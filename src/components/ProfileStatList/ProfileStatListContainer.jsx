import { connect } from "react-redux";
import ProfileStatList from "./ProfileStatList";
import { withRouter } from "react-router-dom";
import { unsetEditStats, setEditStats, pullNewStats } from "./../../redux/redux-store";
import { compose } from "redux";
import { getCurrentUserId, getIsLoggedIn } from "../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    profileStats: state.profilePage.users[currentUserPage],
    userStats: state.profilePage.userStats,
    isEditMode: state.profilePage.isEditMode,
    loginUserId: state.profilePage.loginUser.id,
    isLoggedIn: getIsLoggedIn(state),
    currentUserId: getCurrentUserId(state)
  }
}

const mapDispatchToProps = {
  unsetEditStats,
  setEditStats,
  pullNewStats
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileStatList)