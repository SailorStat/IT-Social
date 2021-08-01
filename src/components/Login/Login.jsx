import s from "./Login.module.css"
import LoginFormWrapperContainer from "../LoginFormWrapper/LoginFormWrapperContainer";
import withProfileRedirect from "../../hoc/withProfileRedirect";

const Login = () => {
  return (
    <div className="content__wrapper">
      <div className={s.login__title}>Login</div>
      <LoginFormWrapperContainer />
    </div>
  )
}

export default withProfileRedirect(Login)