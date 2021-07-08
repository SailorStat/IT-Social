import FollowItem from "./FollowItem";
import c from "./FollowItem.module.css"
// current user sylle
// follow style

const FollowItemContainer = (props) => {
  console.log(props.fullName, props.userId, props.loginUser)
  return (
    <FollowItem styleCurrentUser={props.userId == props.loginUser ? c.displayed : ""}
                buttonTitle={props.followed ? "followed" : "follow"}
                buttonStyle={props.followed ? c.active : ""}
                fullName={props.fullName}
                userId={props.userId}
                avatar={props.avatar}
                address={props.address}
                status={props.status}
                followed={props.followed}
    />
  )
}

export default FollowItemContainer