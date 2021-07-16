import { connect } from "react-redux";
import { setFollow, setUnfollow } from "../../redux/redux-store";
import FollowList from "./FollowList";
import { setCurrentUserPage } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    loginUser: state.loginPage.loginUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (event) => {
      const attributes = event.target.attributes
      const isFollowed = attributes.followed.value === "true"
      const userId = attributes.userid.value

      if (isFollowed) return dispatch(setUnfollow(userId))
      return dispatch(setFollow(userId))
    },
    setCurrentUserPage
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer