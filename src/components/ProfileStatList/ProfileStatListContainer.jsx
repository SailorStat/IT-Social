import { connect } from "react-redux";
import ProfileStatList from "./ProfileStatList";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.getCurrentUserPage()
  return {
    profileStats: state.profilePage.users[currentUserPage].profileStats,
    userStats: state.profilePage.userStats
  }
}

const mapDispatchToProps = {}

const ProfileStatListContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileStatList)

export default ProfileStatListContainer