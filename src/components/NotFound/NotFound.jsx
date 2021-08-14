import classNames from "classnames"
import s from "./NotFound.module.css"

const NotFound = () => {
  return (
    <div className={classNames(s.nf__wrapper)}>
      <h1 className={s.nf__title}>404</h1>
      <h2>Pages Not Found</h2>
    </div>
  )
}

export default NotFound