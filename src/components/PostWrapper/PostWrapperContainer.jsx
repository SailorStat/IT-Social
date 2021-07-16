import PostWrapper from "./PostWrapper";
import { addPost, setPostValueText } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.getCurrentUserPage()
  return {
    userPhoto: state.profilePage.users[currentUserPage].avatar,
    getText: state.profilePage.getPostValueText()
  }
}

const mapDispatchToProps = { addPost, setPostValueText }

const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)

export default PostWrapperContainer