import React from 'react';
import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <header className="section">
        <div className="container container__header">
          <Header />
        </div>
      </header>

      <section className="section">
        <div className="container">
          содержимое контейнера
        </div>
      </section>
    </div>
  )
}
export default App