import { connect } from "react-redux";
import FollowWrapper from "./FollowWrapper";
import c from "./FollowWrapper.module.css"

const mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching ? c.loading : ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const FollowWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(FollowWrapper)

export default FollowWrapperContainer