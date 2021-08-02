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

const withProfileRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isLoggedIn) return <Redirect to={"/"}/>
    return <Component />
  }

  return connect(mapStateToPropsForRedirect, mapDispatchToProps)(RedirectComponent)
}
  

export default withProfileRedirect