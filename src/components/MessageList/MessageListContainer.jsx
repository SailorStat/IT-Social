import { connect } from "react-redux";
import MessageList from "./MessageList";
import { setCurrentUserPage } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.dialogs[state.dialogsPage.checkedDialog]?.messagesData || [],
    checkedDialog: state.dialogsPage.checkedDialog,
    loginUser: state.loginPage.loginUser
  }
}

const mapDispatchToProps = { setCurrentUserPage }

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)

export default MessageListContainer