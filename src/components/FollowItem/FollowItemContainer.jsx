import FollowItem from "./FollowItem";
import s from "./FollowItem.module.css"
// current user stylle
// follow style

const FollowItemContainer = (props) => {
  return (
    <FollowItem styleCurrentUser={props.userId === props.loginUser ? s.displayed : ""}
                buttonTitle={props.followed ? "followed" : "follow"}
                buttonStyle={props.followed ? s.active : ""}
                isDisabled={props.inFollowToggle.some(el => el === props.userId)}
                fullName={props.fullName}
                userId={props.userId}
                photo={props.photo}
                location={props.location}
                status={props.status}
                followed={props.followed}
                toggleFollow={props.toggleFollow}
    />
  )
}

export default FollowItemContainer