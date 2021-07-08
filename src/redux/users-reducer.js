import userPhoto from "../assets/img/userPhoto.jpg"
import noAvatar from "../assets/img/no-avatar.png"

const initialState = {
  users: {
    "1121": {
      online: true,
      fullName: "Петя",
      status: "Самый быстрый кодер на диком западе",
      avatar: userPhoto,
      followed: false,
      address: "Смоленск, Россия"
    },
    "1123": {
      online: true,
      fullName: "Ира",
      status: "Не кресло красит человека, а человек кресло",
      avatar: noAvatar,
      followed: true,
      address: "Киев, Украина"
    },
    "1124": {
      online: true,
      fullName: "Юра",
      status: "Хорошо структуророванного кода много не бывает",
      avatar: noAvatar,
      followed: false,
      address: "Минск, Беларусь"
    },
    "1125": {
      online: true,
      fullName: "Света",
      status: "Отличное настроение :)",
      avatar: noAvatar,
      followed: true,
      address: "Саратов, Россия"
    },
    "17725": {
      online: true,
      fullName: "Sailor Stat",
      status: "Live is perfect",
      avatar: userPhoto,
      followed: true,
      address: "Ростов-на-Дону, Россия"
    }
  }
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state
  }
}

export default usersReducer