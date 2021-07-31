import PostList from "./PostList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const mapStateToProps = (state) => {
  const currentUserPage = state.profilePage.currentUserPage
  return {
    posts: state.profilePage.posts[currentUserPage] || []
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(PostList)