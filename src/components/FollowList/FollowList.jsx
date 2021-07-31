import s from "./FollowList.module.css"
import FollowItemContainer from "./../FollowItem/FollowItemContainer";

const FollowList = (props) => {
  return (
    <div className={s.follow__list}>
      {props.users.map(el => (<FollowItemContainer key={el.id}
                                                   fullName={el.fullName}
                                                   userId={el.id}
                                                   photo={el.photo}
                                                   location={el.location}
                                                   status={el.status}
                                                   followed={el.followed}
                                                   toggleFollow={props.toggleFollow}
                                                   loginUser={props.loginUser}
                                                   toggleFollow={props.toggleFollow}
                                                   inFollowToggle={props.inFollowToggle}
                              />
      ))}
    </div>
  )
}

export default FollowList