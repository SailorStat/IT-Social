import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    fullName: state.profilePage.users[currentUserPage].fullName,
    photo: state.profilePage.users[currentUserPage].photos
  }
}

const mapDispatchToProps = {}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer