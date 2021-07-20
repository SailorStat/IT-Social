import { connect } from "react-redux";
import { setFollow, setUnfollow } from "../../redux/redux-store";
import FollowList from "./FollowList";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loginUser: state.loginPage.loginUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId, followed) => {
      if (followed) return dispatch(setUnfollow(userId))
      return dispatch(setFollow(userId))
    }
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer