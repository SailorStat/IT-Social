import { connect } from "react-redux";
import { setFollowActionCreator, setUnfollowActionCreator } from "../../redux/redux-store";
import FollowList from "./FollowList";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loginUser: state.loginPage.getLoginUser()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFollow: (event) => dispatch(setFollowActionCreator(event)),
    setUnfollow: (event) => dispatch(setUnfollowActionCreator(event))
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer