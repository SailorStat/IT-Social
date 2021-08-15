import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import { compose } from "redux";
import { putDialog, toggleFollow } from "../../redux/redux-store";
import { withRouter } from "react-router-dom";
import { getCurrentUserId } from "../../redux/selectors/user-selector";


const mapStateToProps = (state) => {
  const currentUserPage = +state.profilePage.currentUserPage
  return {
    fullName: state.profilePage.users[currentUserPage].fullName,
    photo: state.profilePage.users[currentUserPage].photos,
    currentUserId: getCurrentUserId(state),
    inFollowToggle: state.usersPage.inFollowToggle,
    isFollow: state.usersPage.users.filter(el => el.userId === currentUserPage)[0]?.followed || false
  }
}

const mapDispatchToProps = { putDialog, toggleFollow }

const ProfileInfoContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileInfo)

export default ProfileInfoContainer