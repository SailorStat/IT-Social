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
    toggleFollow: (event) => {
      const attributes = event.target.attributes
      const isFollowed = attributes.followed.value === "true"
      const userId = attributes.userid.value

      if (isFollowed) return dispatch(setUnfollowActionCreator(userId))
      return dispatch(setFollowActionCreator(userId))
    }
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer