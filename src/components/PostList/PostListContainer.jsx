import PostList from "./PostList";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts["17725"] || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer