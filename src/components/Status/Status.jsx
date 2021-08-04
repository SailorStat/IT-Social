import s from "./Status.module.css"
import React from "react";

class Status extends React.Component {
  editModeActivator = () => {
    if (!this.props.match.params.userId) {
      this.props.setEditMode()
    }
  }

  sendNewStatus = () => {
    this.props.pullStatus(this.props.editText)
  }

  componentWillUnmount() {
    this.props.unsetEditMode(this.pullStatus)
  }

  render() {
    return (this.props.editMode && 
      <div className={s.status__editor}>
        <div className={s.status__input__wrapper}>
          <input className={s.status__input} maxLength="300" value={this.props.editText} onChange={this.props.setStatusEditText} autoFocus={true}/>
        </div>
        <div className={s.button__wrapper}>
          <button className={s.button + " " + s.button__cancel} onClick={this.props.unsetEditMode}>Cancel</button>
          <button className={s.button} onClick={this.sendNewStatus}>Save</button>
        </div>
      </div>
    ) || (
      <div className={s.status} onDoubleClick={this.editModeActivator}>{this.props.status}</div>
    )
  }
}

export default Status