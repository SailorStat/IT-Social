import c from "./FollowList.module.css"
import FollowItemContainer from "./../FollowItem/FollowItemContainer";

const FollowList = (props) => {
  return (
    <div className={c.follow__list}>
      {props.users.map(el => (<FollowItemContainer key={el.id}
                                                   fullName={el.fullName}
                                                   userId={el.id}
                                                   avatar={el.avatar}
                                                   location={el.location}
                                                   status={el.status}
                                                   followed={el.followed}
                                                   loginUser={props.loginUser}
                                                   toggleFollow={props.toggleFollow}
                                                   setCurrentUserPage={props.setCurrentUserPage}
                              />
      ))}
    </div>
  )
}

export default FollowList