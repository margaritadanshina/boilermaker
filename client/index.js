import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom'
import store from './store'
import App from './App'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app") // make sure this is the same as the id of the div in your index.html
);