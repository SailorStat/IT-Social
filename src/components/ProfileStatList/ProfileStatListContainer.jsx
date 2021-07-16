import { connect } from "react-redux";
import ProfileStatList from "./ProfileStatList";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    profileStats: state.profilePage.users[currentUserPage],
    userStats: state.profilePage.userStats
  }
}

const mapDispatchToProps = {}

const ProfileStatListContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatList)

export default ProfileStatListContainer