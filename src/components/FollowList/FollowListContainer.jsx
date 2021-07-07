import { connect } from "react-redux";
import FollowList from "./FollowList";


const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users,
    loginUser: state.loginPage.getLoginUser()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const FollowListContainer = connect(mapStateToProps, mapDispatchToProps)(FollowList)

export default FollowListContainer