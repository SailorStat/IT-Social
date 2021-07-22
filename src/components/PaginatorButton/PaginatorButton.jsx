import c from "./PaginatorButton.module.css"

const PaginatorButton = (props) => {
  return (
    <button className={c.paginator__button} onClick={props.upCurrentPage} disabled={props.isFetching}>Show more</button>
  )
}

export default PaginatorButton