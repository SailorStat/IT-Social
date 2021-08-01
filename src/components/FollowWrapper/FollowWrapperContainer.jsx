import { connect } from "react-redux";
import { compose } from "redux";
import withLoginRedirect from "../../hoc/withLoginRedirect";
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
  withLoginRedirect
)(FollowWrapper)