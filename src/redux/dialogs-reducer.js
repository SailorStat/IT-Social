import noAvatar from "../assets/no-avatar.png"

const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      console.log("add message")
      const dialogValueText = state.getDialogValueText()
      if (!dialogValueText) return state

      const checkedDialog = state.getCheckedDialog()
      const currentMessagesList = state.dialogs[checkedDialog].messagesData
      const newDate = new Date()

      currentMessagesList.push({
        fullName: action.fullName,
        userPhoto: action.userPhoto,
        fromCurrentUser: true,
        date: `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`,
        message: dialogValueText,
        messageId: (currentMessagesList[currentMessagesList.length - 1]?.messageId + 1) || 1
      })

      state._dialogValueText = ""
      return state


    case SET_CHECKED_DIALOG:
      console.log("change checked dialog")
      state._checkedDialog = action.userId || ""
      localStorage.setItem('_checkedDialog', action.userId)
      return state


    case SET_DIALOG_VALUE_TEXT:
      console.log("change message")
      state._dialogValueText = action.value || ""
      return state
    

    default:
      return state
  }
}

export default dialogsReducer