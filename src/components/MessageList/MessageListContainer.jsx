import { connect } from "react-redux";
import MessageList from "./MessageList";


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.dialogs[state.dialogsPage.getCheckedDialog()]?.messagesData || []
  }
}

const mapDispatchToProps = {}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList)

export default MessageListContainer