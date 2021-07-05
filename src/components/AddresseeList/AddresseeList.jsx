import c from "./AddresseeList.module.css"
import Addressee from "../Addressee/Addressee";

const AddresseeList = (props) => {
  return (
    <div className={c.dialogs__inner}>
      {Object.keys(props.users).map(el => (
        <Addressee key={"Addressee" + el} fullName={props.users[el].profileStats["fullName"]} userId={el} setCheckedDialog={props.setCheckedDialog}/>
      ))}
    </div>
  )
}

export default AddresseeList