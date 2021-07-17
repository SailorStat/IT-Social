import PostList from "./PostList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    posts: state.profilePage.posts[currentUserPage] || []
  }
}

const mapDispatchToProps = {}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

const PostListContainerWithRouter = withRouter(PostListContainer)

export default PostListContainerWithRouter