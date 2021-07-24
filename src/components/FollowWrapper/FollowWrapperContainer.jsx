import { connect } from "react-redux";
import { compose } from "redux";
import withLoggedRedirect from "../../hoc/withLoggedRedirect";
import FollowWrapper from "./FollowWrapper";
import c from "./FollowWrapper.module.css"


const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching ? c.loading : ""
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoggedRedirect
)(FollowWrapper)