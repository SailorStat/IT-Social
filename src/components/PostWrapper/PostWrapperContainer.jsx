import PostWrapper from "./PostWrapper";
import { addPost, setPostValueText } from "../../redux/redux-store";
import { connect } from "react-redux";
import { getCurrentUserId, getIsLoggedIn } from "../../redux/selectors/user-selector";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    userPhoto: state.loginPage.loginUser.photo,
    getText: state.profilePage.postValueText,
    isLoggedIn: getIsLoggedIn(state),
    userId: getCurrentUserId(state),
  }
}

const mapDispatchToProps = { addPost, setPostValueText }

const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)

export default PostWrapperContainer