import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { userAuth } from "./redux/redux-store";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = { userAuth }


const App = (props) => {
  props.userAuth()

  return (
    <>
      <section className="section">
        <div className="container container__header">
          <Header />
        </div>
        <div className="container">
          <Body />
        </div>
      </section>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)