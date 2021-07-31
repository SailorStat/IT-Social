import s from "./Base.module.css"
import { Route } from "react-router-dom";
import News from '../News/News';
import Settings from '../Settings/Settings';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';
import FollowWrapperContainer from "./../FollowWrapper/FollowWrapperContainer";
import ProfileContainer from "../Profile/ProfileContainer";

const Base = () => {
  return (
    <div className={s.base}>
      <Route exact key="profile" path="/" component={ProfileContainer} />
      <Route key="guestProfile" path="/profile/:userId" component={ProfileContainer} />
      <Route key="dialogs" path="/dialogs" component={DialogsContainer} />
      <Route key="follows" path="/follows" component={FollowWrapperContainer} />
      <Route key="news" path="/news" component={News} />
      <Route key="settings" path="/settings" component={Settings} />
      <Route key="login" path="/login" component={Login} />
    </div>
  )
}

export default Base