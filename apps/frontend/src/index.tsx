import React from 'react';
// import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import App from './App';
import { rootReducers } from './config/Reducers';
import { rootSagas } from './config/Sagas';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

