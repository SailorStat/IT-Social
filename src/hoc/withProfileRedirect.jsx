import React from 'react';
import { Redirect } from "react-router-dom"
import { connect } from "react-redux";

const mapStateToPropsForRedirect = state => {
  return {
    isLoggedIn: state.loginPage.isLoggedIn
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