import c from "./NavigationItem.module.css"

const NavigationItem = (prop) => {
  return (
    <div className={c.navigationItem}>
      {prop.title}
    </div>
  )
}

export default NavigationItem