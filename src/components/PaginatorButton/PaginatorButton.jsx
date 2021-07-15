import c from "./PaginatorButton.module.css"

const PaginatorButton = (props) => {
  return (
    <button className={c.paginator__button} onClick={props.upCurrentPage}>Show more</button>
  )
}

export default PaginatorButton