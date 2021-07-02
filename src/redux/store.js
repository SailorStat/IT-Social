import userPhoto from "../assets/userPhoto.jpg"
import noAvatar from "../assets/no-avatar.png"

// Action types
const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"


const store = {
  _state: {
    profilePage: {
      users: {
        "1121": {
          online: true,
          profileStats: {
            "fullName": "Петя"
          }
        },
        "1123": {
          online: true,
          profileStats: {
            "fullName": "Ира"
          }
        },
        "1124": {
          online: true,
          profileStats: {
            "fullName": "Юра"
          }
        },
        "1125": {
          online: true,
          profileStats: {
            "fullName": "Света"
          }
        },
        "17725": {
          online: true,
          status: "Live is perfect",
          avatar: userPhoto,
          profileStats: {
            "aboutMe": "я крутой чувак",
            "contacts": {
              "skype": "skyp",
              "vk": "vk.com",
              "facebook": "facebook",
              "icq": "icq",
              "email": "email",
              "googlePlus": "gogep",
              "twitter": "twitter",
              "instagram": "instagra",
              "whatsApp": "watsapp"
            },
            "lookingForAJob": true,
            "lookingForAJobDescription": 'Ищу работу, знаю это, это и это',
            "fullName": "Sailor Stat",
            "userId": 17725
          }
        },
      },

      userStats: ["About Me", "Contacts", "Looking for a job", "Looking for a job description"],

      posts: {
        "17725": [{
          userId: 17725,
          postId: 1235,
          authorFullName: "Sailor Stat",
          postDate: "13.03.2021 13:15",
          postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nam velit ad magni fugit enim corrupti eaque harum. Molestiae et, laboriosam neque hic odio velit ipsam porro consectetur dolore ipsa, iusto quia libero? Reprehenderit doloribus molestias nulla tempora suscipit!",
          likeCount: 34,
          currentUserLiked: false,
          repostCount: 15,
          currentUserReposted: false,
          avatar: userPhoto
        }, {
          userId: 17725,
          postId: 1234,
          authorFullName: "Sailor Stat",
          postDate: "12.03.2021 13:56",
          postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae nam velit!",
          likeCount: 23,
          currentUserLiked: true,
          repostCount: 9,
          currentUserReposted: true,
          avatar: userPhoto
        }, {
          userId: 17725,
          postId: 1233,
          authorFullName: "Sailor Stat",
          postDate: "11.03.2021 13:23",
          postText: "Lorem ipsum dolor sit amet consectetur",
          likeCount: 27,
          currentUserLiked: true,
          repostCount: 11,
          currentUserReposted: false,
          avatar: userPhoto
        }]
      },

      _postValueText: ""
    },

    dialogsPage: {
      dialogs: {
        "1121": {
          messagesData: [{
            fullName: "Петя",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:30 12.03.2021",
            message: "Привет, как твои дела?",
            messageId: 546
          }, {
            fullName: "Петя",
            userPhoto: userPhoto,
            fromCurrentUser: false,
            date: "11:31 12.03.2021",
            message: `Привет) Рад тебя видеть в сети. У меня всё отлично, как твои дела?)`,
            messageId: 547
          }, {
            fullName: "Петя",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:32 12.03.2021",
            message: "Отдохнул, теперь снова готов работать, не покладая мыши и клавиатуры).",
            messageId: 548
          }]
        },
        "1123": {
          messagesData: [{
            fullName: "Ира",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:30 12.03.2021",
            message: "Привет, соскучилась?)",
            messageId: 546
          }, {
            fullName: "Ира",
            userPhoto: userPhoto,
            fromCurrentUser: false,
            date: "11:31 12.03.2021",
            message: `Привет, даже не знала, куда себя деть)`,
            messageId: 547
          }, {
            fullName: "Ира",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:32 12.03.2021",
            message: "Никуда не девайся, завтра продолжим делать соцсеть",
            messageId: 548
          }]
        }
      },
      _checkedDialog: localStorage.getItem('_checkedDialog'),

      _dialogValueText: ""
    },

    pages: {
      "Profile": "/",
      "Dialogs": "/dialogs",
      "News": "/news",
      "Settings": "/settings"
    }
  },

  getState() {
    return this._state
  },

  getCheckedDialog() {
    return this.getState().dialogsPage._checkedDialog
  },

  getDialogValueText() {
    return this.getState().dialogsPage._dialogValueText
  },

  getPostValueText() {
    return this.getState()._postValueText
  },

  rerenderEntireTree() { },



  _addMessage() {
    debugger
    const pages = this.getState().dialogsPage
    if (!this.getDialogValueText()) return

    const newDate = new Date()
    const currentMessagesList = pages.dialogs[this.getCheckedDialog()].messagesData

    currentMessagesList.push({
      fullName: this.getState().profilePage.users[this.getCheckedDialog()].profileStats.fullName,
      userPhoto: this.getState().profilePage.users["17725"]?.avatar || noAvatar,
      fromCurrentUser: true,
      date: `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`,
      message: this.getDialogValueText(),
      messageId: (currentMessagesList[currentMessagesList.length - 1]?.messageId + 1) || 1
    })

    this.setDialogValueText()
  },


  addPost(userId) {
    const newDate = new Date()
    const pages = this.getState().profilePage

    pages.posts["17725"].unshift({
      userId,
      postId: pages.posts["17725"].postId + 1,
      authorFullName: pages.users["17725"].profileStats.fullName,
      postDate: `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`,
      postText: this.getPostValueText() || "Автор хотел сказать важную мысль, но его молчание оказалось многословнее всего",
      likeCount: 0,
      currentUserLiked: false,
      repostCount: 0,
      currentUserReposted: false,
      avatar: pages.users["17725"].avatar
    })

    this.setPostValueText("")
  },


  _setCheckedDialog(userId) {
    this.getState().dialogsPage._checkedDialog = userId
    localStorage.setItem('_checkedDialog', userId)
  },


  setDialogValueText(event) {
    this.getState().dialogsPage._dialogValueText = event?.target?.value || ""
    this.rerenderEntireTree()
  },


  setPostValueText(event) {
    this.getState()._postValueText = event?.target?.value || ""
    this.rerenderEntireTree()
  },


  subscribe(observer) {
    this.rerenderEntireTree = observer
  },

  dispatch(action) {
    debugger
    switch(action.type) {
      case ADD_MESSAGE :
        return this._addMessage()
      case SET_CHECKED_DIALOG :
        return this._setCheckedDialog(action.userId)
      default: break
    }
  }
}

export default store
window.store = store


export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  }
}

export const setChekedDialogActionCreator = (userId) => {
  return {
    type: SET_CHECKED_DIALOG,
    userId
  }
}