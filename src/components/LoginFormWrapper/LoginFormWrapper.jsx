import LoginFormContainer from "../LoginForm/LoginFormContainer"

const LoginFormWrapper = (props) => {
  const setLogin = (formData) => {
    props.postLoginUser(formData)
  }
  
  return <LoginFormContainer onSubmit={setLogin}/>
}

export default LoginFormWrapper