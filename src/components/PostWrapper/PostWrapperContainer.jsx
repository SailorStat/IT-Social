import PostWrapper from "./PostWrapper";
import { addPost, setPostValueText } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    userPhoto: state.loginPage.loginUser.photo,
    getText: state.profilePage.postValueText,
    isLoggedIn: state.loginPage.isLoggedIn
  }
}

const mapDispatchToProps = { addPost, setPostValueText }

const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)

export default PostWrapperContainer