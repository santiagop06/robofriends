import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers} from 'redux';
import './index.css';
import App from './Container/App.js';
import * as serviceWorker from './serviceWorker';
import {searchRobots , requestRobots} from './reducers.js'
import { createLogger  } from 'redux-logger'
import "tachyons";
import thunkMiddleware from 'redux-thunk';
//import {robots} from "./robots";

const logger = createLogger(); 
const rootReducer = combineReducers({searchRobots, requestRobots})

const store= createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
	<Provider store={store}>
	<App/>
	</Provider>
	,document.getElementById('root')
);


serviceWorker.unregister();
