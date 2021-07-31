import s from "./AddresseeList.module.css"
import Addressee from "../Addressee/Addressee";

const AddresseeList = (props) => {
  return (
    <div className={s.dialogs__inner}>
      {Object.keys(props.users).map(el => (
        <Addressee key={"Addressee" + el} fullName={props.users[el]["fullName"]} userId={el} setCheckedDialog={props.setCheckedDialog}/>
      ))}
    </div>
  )
}

export default AddresseeList