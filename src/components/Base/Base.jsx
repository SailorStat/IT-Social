import s from "./Base.module.css"
import { Route } from "react-router-dom";
import News from '../News/News';
import Settings from '../Settings/Settings';
import Login from '../Login/Login';
import DialogsContainer from '../Dialogs/DialogsContainer';
import FollowWrapperContainer from "./../FollowWrapper/FollowWrapperContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import Preloader from "../../assets/img/Preloader.svg"
import { getInitialize } from "../../redux/selectors/user-selector";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    initialize: getInitialize(state)
  }
}

const mapDispatchToProps = { }

const Base = (props) => {
  return (props.initialize &&
    <div className={s.base}>
          <Route exact key="profile" path="/" component={ProfileContainer} />
          <Route key="guestProfile" path="/profile/:userId" component={ProfileContainer} />
          <Route key="dialogs" path="/dialogs" component={DialogsContainer} />
          <Route key="follows" path="/follows" component={FollowWrapperContainer} />
          <Route key="news" path="/news" component={News} />
          <Route key="settings" path="/settings" component={Settings} />
          <Route key="login" path="/login" component={Login} />
    </div>
  ) || (
    <div className={s.base}>
      <img src={Preloader} alt="" />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)