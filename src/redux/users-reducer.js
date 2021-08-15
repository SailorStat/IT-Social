import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"
import choosePhoto from "./../assets/scripts/choosePhoto";


const SET_FOLLOW = "SET-FOLLOW"
const SET_UNFOLLOW = "SET-UNFOLLOW"
const CREATE_USERS = "CREATE-USERS"
const UPDATE_USERS = "UPDATE-USERS"
const UP_CURRENT_PAGE = "UP-CURRENT-PAGE"
const SET_FETCHING_TRUE = "SET-FETCHING-TRUE"
const SET_FETCHING_FALSE = "SET-FETCHING-FALSE"
const ADD_IN_FOLLOW_TOGGLE = "ADD-IN-FOLLOW-TOGGLE"
const REMOVE_IN_FOLLOW_TOGGLE = "REMOVE-IN-FOLLOW-TOGGLE"
const SET_USER = "SET-USER"


const initialState = {
  users: [{
      followed: false,
      userId: 1121,
      full: "Петя",
      status: "Самый быстрый кодер на диком западе",
      photo: userPhoto,
      location: "Смоленск, Россия"
    }, {
      online: true,
      userId: 1123,
      name: "Ира",
      status: "Не кресло красит человека, а человек кресло",
      photo: noAvatar,
      followed: true,
      location: "Киев, Украина"
    }, {
      online: true,
      userId: 1124,
      name: "Юра",
      status: "Хорошо структуророванного кода много не бывает",
      photo: noAvatar,
      followed: false,
      location: "Минск, Беларусь"
    }, {
      online: true,
      userId: 1125,
      name: "Света",
      status: "Отличное настроение :)",
      photo: noAvatar,
      followed: true,
      location: "Саратов, Россия"
    }
  ],
  pagination: {
    totalCount: 10,
    usersOnPage: 5,
    currentPage: 1
  },
  isFetching: false,
  inFollowToggle: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOLLOW: {
      const newUsersState = [...state.users]
      newUsersState[newUsersState.findIndex(el => el.userId === action.userId)].followed = true
      return {
        ...state,
        users: newUsersState
      }
    }

    case SET_UNFOLLOW: {
      const newUsersState = [...state.users]
      newUsersState[newUsersState.findIndex(el => el.userId === action.userId)].followed = false
      return {
        ...state,
        users: newUsersState
      }
    }

    case CREATE_USERS: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: action.totalCount
        },
        users: action.users.map(el => ({
          followed: el.followed,
          userId: el.id,
          fullName: el.name,
          status: el.status || "no status",
          photo: choosePhoto(el.photos)
        }))
      }
    }

    case UPDATE_USERS: {
      const actionUsersId = action.users.map(el => el.id)
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: action.totalCount
        },
        users: [
          ...state.users.filter(user => !actionUsersId.includes(user.userId)),
          ...action.users.map(el => ({
            followed: el.followed,
            userId: el.id,
            fullName: el.name || "lal",
            status: el.status || "no status",
            photo: choosePhoto(el.photos)
          }))
        ]
      }
    }

    case ADD_IN_FOLLOW_TOGGLE: {
      return {
        ...state,
        inFollowToggle: [
          ...state.inFollowToggle,
          action.userId
        ]
      }
    }

    case REMOVE_IN_FOLLOW_TOGGLE: {
      return {
        ...state,
        inFollowToggle: [
          ...state.inFollowToggle.filter(el => el !== action.userId)
        ]
      }
    }

    case UP_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.pagination.currentPage + 1
        }
      }
    }

    case SET_FETCHING_TRUE: {
      return {
        ...state,
        isFetching: true
      }
    }
    
    case SET_FETCHING_FALSE: {
      return {
        ...state,
        isFetching: false
      }
    }

    case SET_USER: {
      const user = action.user
      if (state.users.filter(el => el.userId === user.userId).length) return state
      const newUser = {
        userId: user.userId,
        fullName: user.fullName,
        status: user.status || "no status",
        photo: choosePhoto(user.photos),
        followed: user.follow,
      }
      return {
        ...state,
        users: [
          ...state.users,
          newUser
        ]
      }
    }

    default: return state
  }
}


export default usersReducer