import React from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";

const mapStateToPropsForRedirect = state => {
  return {
    isLoggedIn: state.loginPage.isLoggedIn
  }
}

const withLoggedRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isLoggedIn) return <Component />
    return <Redirect to={"/login"}/>
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent)
}
  

export default withLoggedRedirect