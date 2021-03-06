// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!
// NOT USED THIS STORE!!!!

import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import pagesReducer from "./pages-reducer"
import loginReducer from "./login-reducer"

// Action types
const ADD_MESSAGE = "ADD-MESSAGE"
const SET_CHECKED_DIALOG = "SET-CHECKED-DIALOG"
const SET_DIALOG_VALUE_TEXT = "SET-DIALOG-VALUE-TEXT"
const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_LOGIN_USER = "SET-LOGIN-USER"

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
          photo: userPhoto,
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
          photo: userPhoto
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
          photo: userPhoto
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
          photo: userPhoto
        }]
      },

      _postValueText: "",

      getPostValueText() {
        return this._postValueText
      },

      _currentUserPage: "17725",
    
      getCurrentUserPage() {
        return this._currentUserPage
      }
    },

    dialogsPage: {
      dialogs: {
        "1121": {
          messagesData: [{
            fullName: "Sailor Stat",
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
            fullName: "Sailor Stat",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:32 12.03.2021",
            message: "Отдохнул, теперь снова готов работать, не покладая мыши и клавиатуры).",
            messageId: 548
          }]
        },
        "1123": {
          messagesData: [{
            fullName: "Sailor Stat",
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
            fullName: "Sailor Stat",
            userPhoto: userPhoto,
            fromCurrentUser: true,
            date: "11:32 12.03.2021",
            message: "Никуда не девайся, завтра продолжим делать соцсеть",
            messageId: 548
          }]
        }
      },
      _checkedDialog: localStorage.getItem('_checkedDialog'),

      _dialogValueText: "",

      getCheckedDialog() {
        return this._checkedDialog
      },
    
      getDialogValueText() {
        return this._dialogValueText
      }
    },

    pages: {
      "Profile": "/",
      "Dialogs": "/dialogs",
      "News": "/news",
      "Settings": "/settings"
    },

    loginPage: {
      _loginUser: "17725",
    
      getLoginUser() {
        return this._loginUser
      },
    }
  },

  getState() {
    return this._state
  },

  _callSubscriber() { },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.loginPage = loginReducer(this._state.loginPage, action)
    this._state.pages = pagesReducer(this._state.pages, action)
    this._callSubscriber()
  }
}


export default store


export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
    fullName: store.getState().profilePage.users[store.getState().dialogsPage.getCheckedDialog()].profileStats.fullName,
    userPhoto: store.getState().profilePage.users["17725"]?.avatar || noAvatar
  }
}

export const setCheckedDialogActionCreator = (event) => {
  return {
    type: SET_CHECKED_DIALOG,
    userId: event.target.attributes.userid.value
  }
}

export const setDialogValueTextActionCreator = (event) => {
  return {
    type: SET_DIALOG_VALUE_TEXT,
    value: event.target.value
  }
}

export const addPostActionCreator = (userId) => {
  return {
    type: ADD_POST,
    userId
  }
}

export const setPostValueTextActionCreator = (event) => {
  return {
    type: SET_POST_VALUE_TEXT,
    value: event.target.value
  }
}

export const setLogoutUserActionCreator = (event) => {
  return {
    type: SET_LOGIN_USER,
    userId: event.target.userid
  }
}