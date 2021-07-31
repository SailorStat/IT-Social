import s from "./PaginatorButton.module.css"

const PaginatorButton = (props) => {
  return (
    <button className={s.paginator__button} onClick={props.upCurrentPage} disabled={props.isFetching}>Show more</button>
  )
}

export default PaginatorButton