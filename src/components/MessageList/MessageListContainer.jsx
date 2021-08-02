import { connect } from "react-redux";
import { getCurrentUserId } from "../../redux/selectors/user-selector";
import MessageList from "./MessageList";


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.dialogs[state.dialogsPage.checkedDialog]?.messagesData || [],
    checkedDialog: state.dialogsPage.checkedDialog,
    loginUser: getCurrentUserId(state)
  }
}

const mapDispatchToProps = {}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)

export default MessageListContainer