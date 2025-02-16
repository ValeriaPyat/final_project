import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';


const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
