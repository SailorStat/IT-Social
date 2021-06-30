import userPhoto from "../assets/userPhoto.jpg"
import noAvatar from "../assets/no-avatar.png"
import {rerender} from "../index"



let state = {
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
  setCheckedDialog: (userId) => {
    state._checkedDialog = userId
    localStorage.setItem('_checkedDialog', userId)
  },
  getCheckedDialog: () => {
    return state._checkedDialog
  },

  _dialogsValueText: "",
  setDialogsValueText(event) {
    state._dialogsValueText = event?.target?.value || ""
    rerender()
  },
  getDialogsValueText() {
    return state._dialogsValueText
  },
  addMessage: () => {
    if (!state.getDialogsValueText()) return

    const newDate = new Date()
    const currentMessagesList = state.dialogs[state.getCheckedDialog()].messagesData
    currentMessagesList.push({
      fullName: state.users[state.getCheckedDialog()].profileStats.fullName,
      userPhoto: state.users["17725"]?.avatar || noAvatar,
      fromCurrentUser: true,
      date: `${newDate.getHours()}:${newDate.getMinutes()} ${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()}`,
      message: state.getDialogsValueText(),
      messageId: (currentMessagesList[currentMessagesList.length - 1]?.messageId + 1 ) || 1
    })
    state.setDialogsValueText()
    rerender()
  },

  pages: {
    "Profile": "/",
    "Dialogs": "/dialogs",
    "News": "/news",
    "Settings": "/settings"
  },

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
      currentUserReposted: true
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
  addPost(userId = 17725, postText = "Автор хотел что-то сказать, но его молнание оказалось многословней всего") {
    const date = Date.now()
    state.posts[userId].unshift({
      userId,
      postId: state.posts[userId].postId + 1,
      authorFullName: state.users[userId].profileStats.fullName,
      postDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
      postText,
      likeCount: 0,
      currentUserLiked: false,
      repostCount: 0,
      currentUserReposted: false,
      avatar: state.users[userId].avatar
    })
  }
}

export default state