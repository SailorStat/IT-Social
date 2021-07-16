import noAvatar from "../assets/img/no-avatar.png"
import userPhoto from "../assets/img/userPhoto.jpg"
import { dateCreator } from "../assets/scripts/dateCreator"

const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_CURRENT_USER_PAGE = "SET-CURRENT-USER-PAGE"
const SET_USER = "SET-USER"

const initialState = {
  users: {
    "1121": {
      "aboutMe": null,
      "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
      },
      "lookingForAJob": false,
      "lookingForAJobDescription": null,
      "fullName": "Петя",
      "userId": 17725,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "1123": {
      "aboutMe": null,
      "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
      },
      "lookingForAJob": false,
      "lookingForAJobDescription": null,
      "fullName": "Ира",
      "userId": 17725,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "1124": {
      "aboutMe": null,
      "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
      },
      "lookingForAJob": false,
      "lookingForAJobDescription": null,
      "fullName": "Юра",
      "userId": 17725,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "1125": {
      "aboutMe": null,
      "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
      },
      "lookingForAJob": false,
      "lookingForAJobDescription": null,
      "fullName": "Саша",
      "userId": 17725,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "17725": {
      "aboutMe": null,
      "contacts": {
        "facebook": null,
        "website": null,
        "vk": null,
        "twitter": null,
        "instagram": null,
        "youtube": null,
        "github": null,
        "mainLink": null
      },
      "lookingForAJob": false,
      "lookingForAJobDescription": null,
      "fullName": "Sailor Stat",
      "userId": 17725,
      "photos": {
        "small": userPhoto,
        "large": null
      }
    }
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

  postValueText: "",

  currentUserPage: 17725
}


const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      const userPage = state.currentUserPage
      const newPost = {
        userId: userPage, // action.userId - профиль для публикации
        postId: state.posts[userPage] ? state.posts[userPage][0].postId + 1 : 1,
        authorFullName: state.users[userPage].fullName,
        postDate: dateCreator("d t"),
        postText: state.postValueText || "Автор хотел сказать важную мысль, но его молчание оказалось многословнее всего",
        likeCount: 0,
        currentUserLiked: false,
        repostCount: 0,
        currentUserReposted: false,
        avatar: state.users[userPage].avatar || noAvatar
      }
      return {
        ...state,
        postValueText: "",
        posts: {
          ...state.posts,
          [userPage]: [newPost, ...state.posts[userPage] || []]
        }
      }
    }

    case SET_POST_VALUE_TEXT: { 
      return {
        ...state,
        postValueText: action.value || ""
      }
    }
    
    case SET_CURRENT_USER_PAGE: {
      return {
        ...state,
        currentUserPage: action.currentUserPage || ""
      }
    }

    case SET_USER: {
      console.log(state.users[1123])
      console.log(action.user)
      debugger
      return {
        ...state,
        users: {
          ...state.users,
          [`${action.user.userId}`]: {
            ...action.user
          }
        }
      }
    }

    default:
      return state
  }
}

export default profileReducer