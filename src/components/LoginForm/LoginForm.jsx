import { Field } from "redux-form"
import { email, maxLengthCreator, required} from "../../assets/validators/validators"
import s from "./LoginForm.module.css"
import { ComponentCreator } from "../../loc/FormsControls/FormsControls";

const maxLength100 = maxLengthCreator(100)

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.form__wrapper}>
        <div className={s.form__item}>
          <Field name="email" component={ComponentCreator} placeholder="Email" tagname="input" className={s.input__text} validate={[required, maxLength100, email]}/>
        </div>
        <div className={s.form__item}>
          <Field name="password" component={ComponentCreator} placeholder="Password" tagname="input" type="password" className={s.input__text} validate={[required]}/>
        </div>
        <div className={s.form__item}>
          <Field name="rememberMe" component="input" type="checkbox" className={s.input__checkbox}/>
          <span className={s.input__description}>Remember me</span>
        </div>
        <div className={s.form__item}>
          <button className={s.button}>Sign in</button>
        </div>
      </div>
    </form>
  )
}

export default LoginForm