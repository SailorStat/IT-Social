import { dateCreator } from "../assets/scripts/dateCreator"
import choosePhoto from "../assets/scripts/choosePhoto"
import stringTranslator from "../assets/scripts/stringTranslator"

const ADD_MESSAGE = "ADD-MESSAGE"
const SET_MESSAGES = "SET-MESSAGES"
const SET_DIALOGS = "SET-DIALOGS"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"
const ADD_NEW_PROFILE_PHOTO = "ADD-NEW-PROFILE-PHOTO"

const initialState = {
  dialogs: [],
  messageLibrary: {
    "11211121": {
      messagesData: [{
        fullName: "Sailor Stat",
        userPhoto: "",
        fromCurrentUser: true,
        date: "11:30 12.03.2021",
        message: "Привет, как твои дела?",
        messageId: 546
      }]
    }
  },
  checkedDialog: localStorage.getItem('_checkedDialog'),

  dialogValueText: "",

  loginUser: {
  }
}

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE: {
      if (!state.dialogValueText) return state
      const currentMessagesList = state.messageLibrary[action.userId].messagesData

      const newMessagesList = [...currentMessagesList, {
        fullName: state.loginUser.name,
        userPhoto: state.loginUser.photo,
        fromCurrentUser: true,
        date: dateCreator(),
        message: state.dialogValueText,
        messageId: dateCreator() + state.dialogValueText
      }]
      
      return {
        ...state,
        dialogValueText: "",
        messageLibrary: {
          ...state.messageLibrary,
          [action.userId]: {
            messagesData: newMessagesList
          }
        },
      }
    }

    case SET_MESSAGES: {
      return {
        ...state,
        messageLibrary: {
          ...state.messageLibrary,
          [action.currentAddressee.userId]: {
            messagesData: action.messages.map(message => ({
              fullName: message.senderId === state.loginUser.id ? state.loginUser.name : action.currentAddressee.fullName,
              userPhoto: message.senderId === state.loginUser.id ? state.loginUser.photo : action.currentAddressee.photo,
              fromCurrentUser: message.senderId === state.loginUser.id,
              date: dateCreator("", message.addedAt),
              message: stringTranslator(message.body),
              messageId: message.id
            }))
          }
        }
      }
    }

    case SET_DIALOGS: {
      const dialogs = action.dialogs.map(el => ({
        userId: el.id,
        photo: choosePhoto(el.photos),
        fullName: el.userName,
        newMessagesCount: el.newMessagesCount
      }))
      return {
        ...state,
        dialogs
      }
    }

    case SET_CHECKED_DIALOG: {
      localStorage.setItem('_checkedDialog', action.userId)
      return {
        ...state,
        checkedDialog: action.userId || ""
      }
    }

    case SET_DIALOG_VALUE_TEXT:{
      return {
        ...state,
        dialogValueText: action.value || ""
      }
    }
    
    case SET_LOGIN_USER: {
      const userData = action.userData
      return {
        ...state,
        loginUser: {
          online: true,
          id: userData.id,
          name: userData.fullName,
          status: userData.status || "no status",
          photo: choosePhoto(userData.photos),
          followed: true
        }
      }
    }
    
    case ADD_NEW_PROFILE_PHOTO: {
      return {
        ...state,
        loginUser: {
          ...state.loginUser,
          photo: choosePhoto(action.photos)
        }
      }
    }

    case SET_LOGOUT_USER: {
      return {
        ...state,
        loginUser: {
          online: false,
          id: undefined,
          name: undefined,
          status: undefined,
          photo: undefined,
          followed: undefined
        }
      }
    }

    default:
      return state
  }
}

export default dialogsReducer