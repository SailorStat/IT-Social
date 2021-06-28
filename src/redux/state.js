import userPhoto from "../assets/userPhoto.jpg"

const state = {
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
      online: true,
      fullName: "Гоша",
      userPhoto: userPhoto,
      messagesData: [{
        fromCurrentUser: true,
        date: "11:30 12.03.2021",
        message: "Привет, как твои дела?",
        messageId: 546
      }, {
        fromCurrentUser: false,
        date: "11:31 12.03.2021",
        message: `Привет) Рад тебя видеть в сети. У меня всё отлично, как твои дела?)`,
        messageId: 547
      }, {
        fromCurrentUser: true,
        date: "11:32 12.03.2021",
        message: "Отдохнул, теперь снова готов работать, не покладая мыши и клавиатуры).",
        messageId: 548
      }]
    }
  },
  pages: {
    "Profile": "/",
    "Dialogs": "/dialogs",
    "News": "/news",
    "Settings": "/settings"
  },
  posts: {
    "1121": [{
      userId: 17725,
      postId: 1234,
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
      postId: 1234,
      authorFullName: "Sailor Stat",
      postDate: "11.03.2021 13:23",
      postText: "Lorem ipsum dolor sit amet consectetur",
      likeCount: 27,
      currentUserLiked: true,
      repostCount: 11,
      currentUserReposted: false,
      avatar: userPhoto
    }]
  }
}

export default state