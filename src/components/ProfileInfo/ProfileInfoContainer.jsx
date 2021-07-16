import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.loginPage.getLoginUser()
  return {
    fullName: state.profilePage.users[currentUserPage].profileStats.name,
    status: state.profilePage.users[currentUserPage].status,
    avatar: state.profilePage.users[currentUserPage].avatar
  }
}

const mapDispatchToProps = {}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer