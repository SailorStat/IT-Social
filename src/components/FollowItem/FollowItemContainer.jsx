import FollowItem from "./FollowItem";
import c from "./FollowItem.module.css"
// current user stylle
// follow style

const FollowItemContainer = (props) => {
  return (
    <FollowItem styleCurrentUser={props.userId === props.loginUser ? c.displayed : ""}
                buttonTitle={props.followed ? "followed" : "follow"}
                buttonStyle={props.followed ? c.active : ""}
                fullName={props.fullName}
                userId={props.userId}
                avatar={props.avatar}
                location={props.location}
                status={props.status}
                followed={props.followed}
                toggleFollow={props.toggleFollow}
                setCurrentUserPage={props.setCurrentUserPage}
    />
  )
}

export default FollowItemContainer