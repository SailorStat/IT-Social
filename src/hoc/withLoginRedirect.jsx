import React from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";
import { getIsLoggedIn } from '../redux/selectors/user-selector';

const mapStateToPropsForRedirect = state => {
  return {
    isLoggedIn: getIsLoggedIn(state)
  }
}

const mapDispatchToProps = {

}

const withLoginRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isLoggedIn) return <Component {...props}/>
    return <Redirect to={"/login"}/>
  }

  return connect(mapStateToPropsForRedirect, mapDispatchToProps)(RedirectComponent)
}
  

export default withLoginRedirect