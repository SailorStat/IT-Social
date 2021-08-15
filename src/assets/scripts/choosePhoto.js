import noAvatar from "../img/no-avatar.png"

const choosePhoto = ({small, large}) => {
  return large || small || noAvatar
}

export default choosePhoto