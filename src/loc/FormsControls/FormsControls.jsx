import s from "./FormControls.module.css"

export const ComponentCreator = ({input, meta, ...props}) => {
  const errorStyle = meta.touched && meta.error && (" " + s.error)
  return (
    <div className={s.form__controls + errorStyle}>
      <div className={s.error__message}>{meta.error}</div>
      <props.tagname {...input} {...props}/>
    </div>
  )
}
