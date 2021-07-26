import c from "./Status.module.css"
import React from "react";
import { setStatusAPI } from "../../API";

class Status extends React.Component {
  editModeActivator = () => {
    if (!this.props.match.params.userId) {
      this.props.setEditMode()
    }
  }

  pullStatus = () => {
    setStatusAPI(this.props.editText)
      .then(response => response && this.props.setStatus())
  }

  componentWillUnmount() {
    this.props.unsetEditMode()
  }

  render() {
    return (this.props.editMode && 
      <div className={c.status__editor}>
        <div className={c.status__input__wrapper}>
          <input className={c.status__input} maxLength="300" value={this.props.editText} onChange={this.props.setStatusEditText} autoFocus={true}/>
        </div>
        <div className={c.button__wrapper}>
          <button className={c.button + " " + c.button__clear} onClick={this.props.unsetEditMode}>Clear</button>
          <button className={c.button} onClick={this.pullStatus}>Save</button>
        </div>
      </div>
    ) || (
      <div className={c.status} onDoubleClick={this.editModeActivator}>{this.props.status}</div>
    )
  }
}

export default Status