import s from "./AddresseeList.module.css"
import Addressee from "../Addressee/Addressee";
import { useState } from "react";
import cn from "classnames";

const AddresseeList = (props) => {
  const [visible, setVisible] = useState(true)
  const toggleVisible = () => {
    visible ? setVisible(false) : setVisible(true)
  }
  return (
    <div className={s.addressee__inner}>
    <div className={cn(s.addressee__opener, {[s.active]: visible})} onClick={toggleVisible}>Addressee List</div>
      <div className={cn(s.addressee__item, {[s.active]: visible})} onClick={toggleVisible}>
        {props.dialogs.map(el => (
          <Addressee key={"Addressee" + el.userId} fullName={el.fullName} userId={el.userId} setCheckedDialog={props.setCheckedDialog}/>
        ))}
      </div>
      
    </div>
  )
}

export default AddresseeList