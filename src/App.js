import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <header className="section">
        <div className="container container__header">
          <Header />
        </div>
      </header>

      <section className="section">
        <div className="container">
          <Body />
        </div>
      </section>
    </BrowserRouter>
  )
}
export default App