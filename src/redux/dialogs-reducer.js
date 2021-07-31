import noAvatar from "../assets/img/no-avatar.png"
import userPhoto from "../assets/img/userPhoto.jpg"
import { dateCreator } from "../assets/scripts/dateCreator"

const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_LOGOUT_USER = "SET-LOGOUT-USER"

const initialState = {
  dialogs: {
    "11211121": {
      messagesData: [{
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "11:30 12.03.2021",
        message: "Привет, как твои дела?",
        messageId: 546
      }, {
        fullName: "Петя",
        userPhoto: noAvatar,
        fromCurrentUser: false,
        date: "11:31 12.03.2021",
        message: `Привет) Рад тебя видеть в сети. У меня всё отлично, как твои дела?)`,
        messageId: 547
      }, {
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "11:32 12.03.2021",
        message: "Отдохнул, теперь снова готов работать, не покладая мыши и клавиатуры).",
        messageId: 548
      }]
    },
    "11231123": {
      messagesData: [{
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "11:30 12.03.2021",
        message: "Привет, соскучилась?)",
        messageId: 546
      }, {
        fullName: "Ира",
        userPhoto: noAvatar,
        fromCurrentUser: false,
        date: "11:31 12.03.2021",
        message: `Привет, даже не знала, куда себя деть)`,
        messageId: 547
      }, {
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "11:32 12.03.2021",
        message: "Никуда не девайся, завтра продолжим делать соцсеть",
        messageId: 548
      }]
    },
    "11241124": {
      messagesData: [{
        fullName: "Юра",
        userPhoto: noAvatar,
        fromCurrentUser: false,
        date: "15:28 14.04.2021",
        message: "Поставь суп в холодильник, когда остынет",
        messageId: 546
      }]
    },
    "11251125": {
      messagesData: [{
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "22:30 25.02.2021",
        message: "Захвати зарядку из машины",
        messageId: 546
      }]
    },
    "17725": {
      messagesData: [{
        fullName: "Sailor Stat",
        userPhoto: userPhoto,
        fromCurrentUser: true,
        date: "09:30 23.02.2021",
        message: "Доброе утро мне",
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
    case ADD_MESSAGE:
      if (!state.dialogValueText) return state

      if (!state.dialogs[state.checkedDialog]) {
        state.dialogs[state.checkedDialog] = {}
        state.dialogs[state.checkedDialog].messagesData = []
      }
      const currentMessagesList = [...state.dialogs[state.checkedDialog].messagesData]

      const newMessagesList = [...currentMessagesList, {
        fullName: action.fullName,
        userPhoto: action.userPhoto,
        fromCurrentUser: true,
        date: dateCreator(),
        message: state.dialogValueText,
        messageId: (currentMessagesList[currentMessagesList.length - 1]?.messageId + 1) || 1
      }]

      return {
        ...state,
        dialogValueText: "",
        dialogs: {
          ...state.dialogs,
          [state.checkedDialog]: {
            messagesData: newMessagesList
          }
        },
      }


    case SET_CHECKED_DIALOG:
      localStorage.setItem('_checkedDialog', action.userId)
      return {
        ...state,
        checkedDialog: action.userId || ""
      }


    case SET_DIALOG_VALUE_TEXT:
      return {
        ...state,
        dialogValueText: action.value || ""
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
          photo: userData.photos.large || userData.photos.small || noAvatar,
          followed: true
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