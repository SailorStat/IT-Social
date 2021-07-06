import PostWrapper from "./PostWrapper";
import { addPostActionCreator, setPostValueTextActionCreator } from "../../redux/redux-store";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.getCurrentUserPage()
  return {
    userPhoto: state.profilePage.users[currentUserPage].avatar,
    getText: state.profilePage.getPostValueText()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBlock: () => dispatch(addPostActionCreator()),
    setText: (event) => dispatch(setPostValueTextActionCreator(event))
  }
}


const PostWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(PostWrapper)

export default PostWrapperContainer