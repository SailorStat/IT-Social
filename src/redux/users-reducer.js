import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"


const SET_FOLLOW = "SET-FOLLOW"
const SET_UNFOLLOW = "SET-UNFOLLOW"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const SET_USERS = "SET-USERS"

const initialState = {
  users: {
    "1121": {
      followed: false,
      id: 1121,
      name: "Петя",
      status: "Самый быстрый кодер на диком западе",
      avatar: userPhoto,
      location: "Смоленск, Россия"
    },
    "1123": {
      online: true,
      name: "Ира",
      status: "Не кресло красит человека, а человек кресло",
      avatar: noAvatar,
      followed: true,
      location: "Киев, Украина"
    },
    "1124": {
      online: true,
      name: "Юра",
      status: "Хорошо структуророванного кода много не бывает",
      avatar: noAvatar,
      followed: false,
      location: "Минск, Беларусь"
    },
    "1125": {
      online: true,
      name: "Света",
      status: "Отличное настроение :)",
      avatar: noAvatar,
      followed: true,
      location: "Саратов, Россия"
    },
    "17725": {
      online: true,
      name: "Sailor Stat",
      status: "Live is perfect",
      avatar: userPhoto,
      followed: true,
      location: "Ростов-на-Дону, Россия"
    }
  },
  pagination: {
    totalCount: 10,
    usersOnPage: 5,
    currentCount: 1
  }
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOLLOW: {
      return {
        ...state,
        users: {
          ...state.users,
          [action.userId]: {
            ...state.users[action.userId],
            followed: true
          }
        }
      }
    }

    case SET_UNFOLLOW: {
      return {
        ...state,
        users: {
          ...state.users,
          [action.userId]: {
            ...state.users[action.userId],
            followed: false
          }
        }
      }
    }

    case SET_TOTAL_COUNT: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalCount: action.totalCount
        }
      }
    }

    case SET_USERS: {
      console.log(action.users)
      const newUsers = {}
      action.users.map(el => newUsers[`${el.id}`] = {
          followed: el.followed,
          id: el.id,
          fullName: el.name || "lal",
          status: el.status || "нет статуса",
          avatar: el.photos.small || noAvatar
        }
      )
      return {
        ...state,
        users: newUsers
      }
    }

    default: return state
  }
}

export default usersReducer