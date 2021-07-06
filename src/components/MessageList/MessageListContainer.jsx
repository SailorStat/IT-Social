import { connect } from "react-redux";
import MessageList from "./MessageList";


const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.dialogs[state.dialogsPage.getCheckedDialog()]?.messagesData || []
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const MessageListContainer = connect(mapStateToProps, null)(MessageList)

export default MessageListContainer