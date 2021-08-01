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

const withLoginRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (props.isLoggedIn) return <Component {...props}/>
    return <Redirect to={"/login"}/>
  }

  return connect(mapStateToPropsForRedirect, mapDispatchToProps)(RedirectComponent)
}
  

export default withLoginRedirect