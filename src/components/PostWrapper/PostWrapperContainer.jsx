import PostWrapper from "./PostWrapper";
import { addPost, setPostValueText } from "../../redux/redux-store";
import { connect } from "react-redux";
import { setCurrentUserPage } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    userPhoto: state.profilePage.users[currentUserPage].avatar,
    getText: state.profilePage.postValueText,
    currentUserPage
  }
}

const mapDispatchToProps = { addPost, setPostValueText, setCurrentUserPage }

const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)

export default PostWrapperContainer