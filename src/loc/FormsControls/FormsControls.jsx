import s from "./FormControls.module.css"

export const ComponentCreator = ({input, meta, ...props}) => {
  const errorStyle = (props.error || (meta.touched && meta.error)) && (" " + s.error)
  return (
    <div className={s.form__controls + errorStyle}>
      { meta.error && <div className={s.error__message}>{meta.error}</div>}
      <props.tagname {...input} {...props}/>
    </div>
  )
}
