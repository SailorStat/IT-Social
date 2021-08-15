import s from "./AddresseeList.module.css"
import Addressee from "../Addressee/Addressee";

const AddresseeList = (props) => {
  return (
    <div className={s.dialogs__inner}>
      {props.dialogs.map(el => (
        <Addressee key={"Addressee" + el.userId} fullName={el.fullName} userId={el.userId} setCheckedDialog={props.setCheckedDialog}/>
      ))}
    </div>
  )
}

export default AddresseeList