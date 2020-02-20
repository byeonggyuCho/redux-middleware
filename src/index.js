import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './configureStore';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const customHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change unregister() to register() below.
// Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();