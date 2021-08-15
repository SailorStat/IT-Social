import { connect } from "react-redux";
import { compose } from "redux";
import { getCurrentUserId } from "../../redux/selectors/user-selector";
import MessageList from "./MessageList";
import { withRouter } from "react-router-dom";
import { getMessageList, getProfileUser } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    dialogs: state.dialogsPage.dialogs,
    loginUserId: getCurrentUserId(state),
    messageLibrary: state.dialogsPage.messageLibrary
  }
}

const mapDispatchToProps = { getMessageList, getProfileUser }

const MessageListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(MessageList)

export default MessageListContainer