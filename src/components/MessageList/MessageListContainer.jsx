import { connect } from "react-redux";
import MessageList from "./MessageList";


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.dialogs[state.dialogsPage.checkedDialog]?.messagesData || [],
    checkedDialog: state.dialogsPage.checkedDialog,
    loginUser: state.loginPage.loginUser.id
  }
}

const mapDispatchToProps = {}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)

export default MessageListContainer