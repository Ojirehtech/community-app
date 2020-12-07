import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import 'antd/dist/antd.css';
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware( thunk, logger ) )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);