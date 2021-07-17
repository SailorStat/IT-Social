import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    fullName: state.profilePage.users[currentUserPage].fullName,
    status: state.profilePage.users[currentUserPage].status || "",
    photo: state.profilePage.users[currentUserPage].photos
  }
}

const mapDispatchToProps = {}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer