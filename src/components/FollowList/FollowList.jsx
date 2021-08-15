import s from "./FollowList.module.css"
import FollowItem from "./../FollowItem/FollowItem";

const FollowList = (props) => {
  return (
    <div className={s.follow__list}>
      {props.users.map(el => (<FollowItem key={"FollowItem" + el.userId}
                                                   fullName={el.fullName}
                                                   userId={el.userId}
                                                   photo={el.photo}
                                                   location={el.location}
                                                   status={el.status}
                                                   followed={el.followed}
                                                   loginUser={props.loginUser}
                                                   toggleFollow={props.toggleFollow}
                                                   inFollowToggle={props.inFollowToggle}
                              />
      ))}
    </div>
  )
}

export default FollowList