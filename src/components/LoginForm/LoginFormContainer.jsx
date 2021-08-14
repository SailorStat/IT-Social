import { compose } from "redux";
import { reduxForm } from "redux-form";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    captchaUrl: state.loginPage.captchaUrl
  }
}

const mapDispatchToProps = {
}

const LoginReduxForm = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({form: "loginForm"})
)(LoginForm) 


export default LoginReduxForm