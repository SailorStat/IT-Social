import { connect } from "react-redux";
import FollowList from "./FollowList";
import { toggleFollow } from "./../../redux/redux-store";
import { getCurrentUserId } from "../../redux/selectors/user-selector";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    inFollowToggle: state.usersPage.inFollowToggle,
    loginUser: getCurrentUserId(state)
  }
}

const mapDispatchToProps = { toggleFollow }

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer