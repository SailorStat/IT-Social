import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

const App = () => {
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
export default App