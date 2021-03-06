import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import store from "./redux/redux-store"
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
  ReactDOM.render(
  <HashRouter>
      <Provider store={store}>
        <React.StrictMode >
          <App />
        </React.StrictMode>
      </Provider>
  </HashRouter>,
  document.getElementById('root')
)}

const state = store.getState()
rerenderEntireTree(state)

store.subscribe(() => rerenderEntireTree(state))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();