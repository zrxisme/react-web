import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes'
import * as serviceWorker from './serviceWorker';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import store from './store'
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
