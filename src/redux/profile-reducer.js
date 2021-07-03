import noAvatar from "../assets/no-avatar.png"
const ADD_POST = "ADD-POST"
const SET_POST_VALUE_TEXT = "SET-POST-VALUE-TEXT"

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
      const newDate = new Date()
    
      state.posts["17725"].unshift({
        userId: "17725", // action.userId - профиль для публикации
        postId: state.posts["17725"][0].postId + 1,
        authorFullName: state.users["17725"].profileStats.fullName,
        postDate: `${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`,
        postText: state.getPostValueText() || "Автор хотел сказать важную мысль, но его молчание оказалось многословнее всего",
        likeCount: 0,
        currentUserLiked: false,
        repostCount: 0,
        currentUserReposted: false,
        avatar: state.users["17725"].avatar || noAvatar
      })
  
      state._postValueText = ""
      return state


    case SET_POST_VALUE_TEXT:
      state._postValueText = action.value || ""
      return state


    default:
      return state
  }
}

export default profileReducer