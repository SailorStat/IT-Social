import noAvatar from "../assets/img/no-avatar.png"
import userPhoto from "../assets/img/userPhoto.jpg"
import { dateCreator } from "../assets/scripts/dateCreator"

const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

const initialState = {
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

  _postValueText: "",

  getPostValueText() {
    return this._postValueText
  },

  _currentUserPage: "17725",

  getCurrentUserPage() {
    return this._currentUserPage
  },

  currentUserPage: 17725
}


const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      const userPage = state.getCurrentUserPage()
      const newPost = {
        userId: userPage, // action.userId - профиль для публикации
        postId: state.posts[userPage][0].postId + 1,
        authorFullName: state.users[userPage].profileStats.fullName,
        postDate: dateCreator("d t"),
        postText: state.getPostValueText() || "Автор хотел сказать важную мысль, но его молчание оказалось многословнее всего",
        likeCount: 0,
        currentUserLiked: false,
        repostCount: 0,
        currentUserReposted: false,
        avatar: state.users[userPage].avatar || noAvatar
      }
  
      return {
        ...state,
        _postValueText: "",
        posts: {
          ...state.posts,
          [userPage]: [newPost, ...state.posts[userPage]]
        }
      }
    }

    case SET_POST_VALUE_TEXT: { 
      return {
        ...state,
        _postValueText: action.value || ""
      }
    }
    
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        _currentUserPage: action.value || ""
      }
    }

    default:
      return state
  }
}

export default profileReducer