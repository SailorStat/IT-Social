import c from "./Base.module.css"
import Profile from './../Profile/Profile';
import { Route } from "react-router-dom";
import News from './../News/News';
import Settings from './../Settings/Settings';
import Login from './../Login/Login';
import Dialogs from './../Dialogs/Dialogs';

const Base = () => {
  return (
    <div className={c.base}>
      <Route exact key="profile" path="/" component={Profile} />
      <Route key="dialogs" path="/dialogs" component={Dialogs} />
      <Route key="news" path="/news" component={News} />
      <Route key="settings" path="/settings" component={Settings} />
      <Route key="login" path="/login" component={Login} />
    </div>
  )
}

export default Base