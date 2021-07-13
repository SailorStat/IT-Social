import c from "./FollowList.module.css"
import FollowItemContainer from "./../FollowItem/FollowItemContainer";

const FollowList = (props) => {
  return (
    <div className={c.follow__list}>
      {Object.keys(props.users).map(el => <FollowItemContainer key={el}
                                                               fullName={props.users[el].fullName}
                                                               userId={el}
                                                               avatar={props.users[el].avatar}
                                                               location={props.users[el].location}
                                                               status={props.users[el].status}
                                                               followed={props.users[el].followed}
                                                               loginUser={props.loginUser}
                                                               toggleFollow={props.toggleFollow}
                                            />)}
    </div>
  )
}

export default FollowList