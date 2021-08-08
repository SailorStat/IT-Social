import PreloaderImage from "../../assets/img/Preloader.svg"
import s from "./Preloader.module.css"

const Preloader = () => {
  return (
    <div className={s.preloader__wrapper}>
      <img src={PreloaderImage} alt="" />
    </div>
  )
}

export default Preloader