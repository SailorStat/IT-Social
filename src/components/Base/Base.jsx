import s from "./Base.module.css"
import { Route, Switch } from "react-router-dom";
import Login from '../Login/Login';
import ProfileContainer from "../Profile/ProfileContainer";
import { getInitialize } from "../../redux/selectors/user-selector";
import { connect } from "react-redux";
import { lazy } from "react";
import withSuspense from "../../hoc/withSuspense";
import Preloader from "../../loc/Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
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
  const dialogsConf = [{path: "/dialogs", exact: true}, {path: "/dialogs/:interlocutor", exact: false}]
  const profileConf = [{path: "/", exact: true}, {path: "/profile/:userId", exact: false}]

  return (props.initialize &&
    <div className={s.base}>
      <Switch>
        { profileConf.map(el => <Route exact={el.exact} key="profile" path={el.path} component={ProfileContainer} />) }
        { dialogsConf.map(el => <Route exact={el.exact} key="dialogs" path={el.path} component={withSuspense(DialogsContainer)} />) }
        <Route key="follows" path="/follows" component={withSuspense(FollowWrapperContainer)} />
        <Route key="news" path="/news" component={ withSuspense(News)} />
        <Route key="settings" path="/settings" component={withSuspense(Settings)} />
        <Route key="login" path="/login" component={Login} />
        <Route key="error" path="*" component={NotFound} />
      </Switch>
    </div>
  ) || (
    <div className={s.preloader}>
      <Preloader />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)