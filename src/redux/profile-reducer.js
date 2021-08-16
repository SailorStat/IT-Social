import userPhoto from "../assets/img/userPhoto.jpg"
import { dateCreator } from "../assets/scripts/dateCreator"
import choosePhoto from "../assets/scripts/choosePhoto"

const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"
const SET_CURRENT_USER_PAGE = "SET-CURRENT-USER-PAGE"
const SET_USER = "SET-USER"
const SET_LOGIN_USER = "SET-LOGIN-USER"
const SET_STATUS = "SET-STATUS"
const SET_STATUS_EDIT_TEXT = "SET_STATUS_EDIT_TEXT"
const SET_NEW_STATS = "SET_NEW_STATS"
const SET_EDIT_STATS = "SET_EDIT_STATS"
const UNSET_EDIT_STATS = "UNSET_EDIT_STATS"
const ADD_NEW_PROFILE_PHOTO = "ADD-NEW-PROFILE-PHOTO"


const initialState = {
  users: {
    "11211121": {
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
      "userId": 11211121,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "11231123": {
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
      "userId": 11211121,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "11241124": {
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
      "userId": 11241124,
      "photos": {
        "small": null,
        "large": null
      }
    },
    "11251125": {
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
      "userId": 11251125,
      "photos": {
        "small": userPhoto,
        "large": userPhoto
      }
    },
  },

  userStats: ["About Me", "Contacts", "Looking for a job", "Looking for a job description"],

  posts: {
    "17725": [
      {
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
      }
    ]
  },

  postValueText: "",

  currentUserPage: undefined,

  loginUser: {
  },

  statusEditText: "",

  isEditMode: false
}


const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST: {
      const userPage = state.currentUserPage
      const loginUser = state.loginUser
      const newPost = {
        userId: loginUser.id,
        postId: state.posts[userPage] ? state.posts[userPage][0].postId + 1 : 1,
        authorFullName: loginUser.name,
        postDate: dateCreator("d t"),
        postText: state.postValueText || "Автор хотел сказать важную мысль, но его молчание оказалось многословнее всего",
        likeCount: 0,
        currentUserLiked: false,
        repostCount: 0,
        currentUserReposted: false,
        photo: loginUser.photo
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
      return {
        ...state,
        users: {
          ...state.users,
          [`${action.user.userId}`]: {
            ...action.user,
            photos: choosePhoto(action.user.photos),
            status: action.user.status|| "no status"
          }
        }
      }
    }

    case SET_LOGIN_USER: {
      const userData = action.userData
      const photo = choosePhoto(userData.photos)
      return {
        ...state,
        statusEditText: userData.status,
        posts: {
          [userData.id]: [
            {
              ...state.posts[17725][0],
              userId: userData.id,
              authorFullName: userData.fullName,
              photo
            }, {
              ...state.posts[17725][1],
              userId: userData.id,
              authorFullName: userData.fullName,
              photo
            }, {
              ...state.posts[17725][2],
              userId: userData.id,
              authorFullName: userData.fullName,
              photo
            }
          ]
        },
        loginUser: {
          online: true,
          id: userData.id,
          name: userData.fullName,
          status: userData.status || "no status",
          photo,
          followed: true
        }
      }
    }

    case ADD_NEW_PROFILE_PHOTO: {
      const photos = choosePhoto(action.photos)
      return {
        ...state,
        users: {
          ...state.users,
          [state.loginUser.id]: {
            ...state.users[state.loginUser.id],
            photos
          }
        },
        loginUser: {
          ...state.loginUser,
          photos
        }
      }
    }

    case SET_STATUS_EDIT_TEXT: {
      return {
        ...state,
        statusEditText: action.status
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        users: {
          ...state.users,
          [state.loginUser.id]: {
            ...state.users[state.loginUser.id],
            status: state.statusEditText || "no status"
          }
        },
        loginUser: {
          ...state.loginUser,
          status: state.statusEditText || "no status"
        }
      }
    }
    
    case SET_EDIT_STATS: {
      return {
        ...state,
        isEditMode: true
      }
    }

    case UNSET_EDIT_STATS: {
      return {
        ...state,
        isEditMode: false
      }
    }

    case SET_NEW_STATS: {
      return {
        ...state,
        isEditMode: false,
        users: {
          ...state.users,
          [action.id]: {
            ...state.users[action.id],
            ...action.stats
          }
        }
      }
    }

    default:
      return state
  }
}

export default profileReducer