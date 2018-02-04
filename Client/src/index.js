import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './saga';

import './index.css';
import App from './App';
import AppReducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
