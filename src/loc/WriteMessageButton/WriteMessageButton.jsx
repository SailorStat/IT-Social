import { useHistory } from "react-router-dom"
import AcceptButton from "../AcceptButton/AcceptButton"

const WriteMessageButton = (props) => {
  const history = useHistory()
  const addDialog = () => {
    props.putDialog(props.userId)
    history.push("/dialogs/" + props.userId)
  }

  return (
    <AcceptButton callBackFunc={addDialog} buttonTitle="Write a message"/>
  )
}

export default WriteMessageButton