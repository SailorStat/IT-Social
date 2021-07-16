import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";
import noAvatar from "../../assets/img/no-avatar.png";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    fullName: state.profilePage.users[currentUserPage].fullName,
    status: state.profilePage.users[currentUserPage]?.status || "",
    avatar: state.profilePage.users[currentUserPage]?.avatar || noAvatar
  }
}

const mapDispatchToProps = {}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer