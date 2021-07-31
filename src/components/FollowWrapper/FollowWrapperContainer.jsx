import { connect } from "react-redux";
import { compose } from "redux";
import withLoggedRedirect from "../../hoc/withLoggedRedirect";
import FollowWrapper from "./FollowWrapper";
import s from "./FollowWrapper.module.css"


const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching ? s.loading : ""
  }
}

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoggedRedirect
)(FollowWrapper)