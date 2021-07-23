import { connect } from "react-redux";
import FollowList from "./FollowList";
import { toggleFollow } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    inFollowToggle: state.usersPage.inFollowToggle,
    loginUser: state.loginPage.loginUser.id
  }
}

const mapDispatchToProps = { toggleFollow }

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer