import { Field } from "redux-form"
import { email, maxLengthCreator, required, english} from "../../assets/validators/validators"
import s from "./LoginForm.module.css"
import { ComponentCreator } from "../../loc/FormsControls/FormsControls";
import AcceptButton from "./../../loc/AcceptButton/AcceptButton";

const maxLength100 = maxLengthCreator(100)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form__wrapper}>
        <div className={s.form__item}>
          { props.error && <div className={s.error__message}>{props.error}</div> }
        </div>
        <div className={s.form__item}>
          <Field name="email" component={ComponentCreator} placeholder="Email" tagname="input" className={s.input__text} validate={[required, maxLength100, email]} error={props.error}/>
        </div>
        <div className={s.form__item}>
          <Field name="password" component={ComponentCreator} placeholder="Password" tagname="input" type="password" className={s.input__text} validate={[required]} error={props.error}/>
        </div>
        <div className={s.form__item}>
          <Field name="rememberMe" component="input" type="checkbox" className={s.input__checkbox}/>
          <span className={s.input__description}>Remember me</span>
        </div>
        {
          props.captchaUrl && (
            <div className={s.form__item}>
              <Field name="captcha" component={ComponentCreator} placeholder="Captcha" tagname="input" className={s.input__text} validate={[required, english]} error={props.error} autoComplete="off"/>
              <img src={props.captchaUrl} alt="" className={s.form__captcha}/>
            </div>
          )
        }
        <div className={s.form__item}>
          <AcceptButton buttonTitle="Sign in"/>
        </div>
      </div>
    </form>
  )
}

export default LoginForm