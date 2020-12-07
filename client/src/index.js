import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
// import 'react-app-polyfill/ie11'; // For IE 11 support
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import rootReducer from "./store/reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware( thunk, logger ) )
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));


