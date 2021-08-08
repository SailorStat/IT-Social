import { Suspense } from "react"
import Preloader from "../loc/Preloader/Preloader"

const style = {
    margin: `0 auto`,
    width: `200px`,
    height: `200px`
  }

const withSuspense = (Component) => {
  return (props) => (
    <Suspense fallback={(
      <div style={style}>
        <Preloader {...props}/>
      </div>
    )}>
      <Component />
    </Suspense>
  )
}

export default withSuspense