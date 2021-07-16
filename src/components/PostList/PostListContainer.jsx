import PostList from "./PostList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts[state.profilePage.currentUserPage] || []
  }
}

const mapDispatchToProps = {}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer