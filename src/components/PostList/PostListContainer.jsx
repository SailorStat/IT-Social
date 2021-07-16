import PostList from "./PostList";
import { connect } from "react-redux";
import { setCurrentUserPage } from "./../../redux/redux-store";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts[state.profilePage.currentUserPage] || []
  }
}

const mapDispatchToProps = { setCurrentUserPage }

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer