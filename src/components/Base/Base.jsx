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
      <Route exact path="/" component={Profile} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/news" component={News} />
      <Route path="/settings" component={Settings} />
      <Route path="/login" component={Login} />
    </div>
  )
}

export default Base