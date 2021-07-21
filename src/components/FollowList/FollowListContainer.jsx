import { connect } from "react-redux";
import { addInFollowToggle, removeInFollowToggle, setFollow, setUnfollow } from "../../redux/redux-store";
import FollowList from "./FollowList";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    inFollowToggle: state.usersPage.inFollowToggle,
    loginUser: state.loginPage.loginUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId, followed) => {
      if (followed) return dispatch(setUnfollow(userId))
      return dispatch(setFollow(userId))
    },
    followToggled: (userId, toggled) => {
      if (toggled) return dispatch(addInFollowToggle(userId))
      return dispatch(removeInFollowToggle(userId))
    }
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer