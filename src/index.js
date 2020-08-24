import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'tachyons';
import App from './App.js'
import { searchRobots } from './Reducers.js';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>
, 
document.getElementById('root'));

