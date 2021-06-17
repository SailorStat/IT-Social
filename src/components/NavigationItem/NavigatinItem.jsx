import "./NavigationItem.css"

const NavigationItem = (prop) => {
  return (
    <div className="navigationItem">
      {prop.title}
    </div>
  )
}

export default NavigationItem