import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { subscribe } from "../src/redux/state"
import StateContext from "./StateContext";

export const rerenderEntireTree = () => {
  ReactDOM.render(
  <BrowserRouter>
    <StateContext.Provider value={state}>
      <React.StrictMode >
        <App />
      </React.StrictMode>
    </StateContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
)}

rerenderEntireTree()

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();