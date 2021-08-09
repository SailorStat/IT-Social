import s from "./AcceptButton.module.css"

const AcceptButton = ({callBackFunc, isDisabled, buttonTitle, ...props}) => {
  return (
    <button className={s.button} onClick={callBackFunc} disabled={isDisabled} {...props}>{buttonTitle}</button>
  )
}

export default AcceptButton