import { connect } from "react-redux";
import LoginFormWrapper from "./LoginFormWrapper";
import { postLoginUser } from "./../../redux/redux-store";


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
  postLoginUser
}

const LoginFormWrapperContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormWrapper)

export default LoginFormWrapperContainer