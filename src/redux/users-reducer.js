import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"


const SET_FOLLOW = "SET-FOLLOW"
const SET_UNFOLLOW = "SET-UNFOLLOW"
const CREATE_USERS = "CREATE-USERS"
const UPDATE_USERS = "UPDATE-USERS"
const UP_CURRENT_PAGE = "UP-CURRENT-PAGE"
const SET_FETCHING_TRUE = "SET-FETCHING-TRUE"
const SET_FETCHING_FALSE = "SET-FETCHING-FALSE"


const initialState = {
  users: [{
      followed: false,
      id: 1121,
      name: "Петя",
      status: "Самый быстрый кодер на диком западе",
      avatar: userPhoto,
      location: "Смоленск, Россия"
    }, {
      online: true,
      id: 1123,
      name: "Ира",
      status: "Не кресло красит человека, а человек кресло",
      avatar: noAvatar,
      followed: true,
      location: "Киев, Украина"
    }, {
      online: true,
      id: 1124,
      name: "Юра",
      status: "Хорошо структуророванного кода много не бывает",
      avatar: noAvatar,
      followed: false,
      location: "Минск, Беларусь"
    }, {
      online: true,
      id: 1125,
      name: "Света",
      status: "Отличное настроение :)",
      avatar: noAvatar,
      followed: true,
      location: "Саратов, Россия"
    }, {
      online: true,
      id: 17725,
      name: "Sailor Stat",
      status: "Live is perfect",
      avatar: userPhoto,
      followed: true,
      location: "Ростов-на-Дону, Россия"
    }
  ],
  pagination: {
    totalCount: 10,
    usersOnPage: 5,
    currentPage: 1
  },
  isFetching: false
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOLLOW: {
      const newUsersState = [...state.users]
      newUsersState[newUsersState.findIndex(el => el.id == action.userId)].followed = true
      return {
        ...state,
        users: newUsersState
      }
    }

    case SET_UNFOLLOW: {
      const newUsersState = [...state.users]
      newUsersState[newUsersState.findIndex(el => el.id == action.userId)].followed = false
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
          id: el.id,
          fullName: el.name || "lal",
          status: el.status || "нет статуса",
          avatar: el.photos.small || noAvatar
        }))
      }
    }

    case UPDATE_USERS: {
      const actionUsersId = action.users.map(el => el.id)
      const users = [
        ...state.users.filter(user => !actionUsersId.includes(user.id)),
        ...action.users.map(el => ({
          followed: el.followed,
          id: el.id,
          fullName: el.name || "lal",
          status: el.status || "нет статуса",
          avatar: el.photos.small || noAvatar
        }))
      ]
      // const stringUsers = newUsersArr.map(el => JSON.stringify(el))
      // const users = Array.from(new Set(stringUsers)).map(el => JSON.parse(el))

      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: action.totalCount
        },
        users
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

    default: return state
  }
}

export default usersReducer