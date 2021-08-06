import s from "./Status.module.css"
import { useEffect } from "react";

const Status = ({pullStatus, unsetEditMode, ...props}) => {
  const matchId = props.match.params.userId
  const editModeActivator = () => {
    (!matchId || +matchId === props.currentUserId) && props.setEditMode()
  }

  const sendNewStatus = () => { pullStatus(props.editText) }

  useEffect(() => unsetEditMode(pullStatus), [unsetEditMode, pullStatus])

  return (props.editMode && 
    <div className={s.status__editor}>
      <div className={s.status__input__wrapper}>
        <input className={s.status__input} maxLength="300" value={props.editText} onChange={props.setStatusEditText} autoFocus={true}/>
      </div>
      <div className={s.button__wrapper}>
        <button className={s.button + " " + s.button__cancel} onClick={unsetEditMode}>Cancel</button>
        <button className={s.button} onClick={sendNewStatus}>Save</button>
      </div>
    </div>
  ) || (
    <div className={s.status} onDoubleClick={editModeActivator}>{props.status}</div>
  )
}

export default Status