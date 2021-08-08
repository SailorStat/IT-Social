import s from "./Base.module.css"
import { Route } from "react-router-dom";
import Login from '../Login/Login';
import ProfileContainer from "../Profile/ProfileContainer";
import { getInitialize } from "../../redux/selectors/user-selector";
import { connect } from "react-redux";
import { lazy } from "react";
import withSuspense from "../../hoc/withSuspense";
import Preloader from "../../loc/Preloader/Preloader";
const News = lazy(() => import('../News/News')) ;
const Settings = lazy(() => import('../Settings/Settings')) ;
const DialogsContainer = lazy(() => import('../Dialogs/DialogsContainer')) ;
const FollowWrapperContainer = lazy(() => import("./../FollowWrapper/FollowWrapperContainer"));


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
          <Route key="dialogs" path="/dialogs" component={withSuspense(DialogsContainer)} />
          <Route key="follows" path="/follows" component={withSuspense(FollowWrapperContainer)} />
          <Route key="news" path="/news" component={ withSuspense(News)} />
          <Route key="settings" path="/settings" component={withSuspense(Settings)} />
          <Route key="login" path="/login" component={Login} />
    </div>
  ) || (
    <div className={s.preloader}>
      <Preloader />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)