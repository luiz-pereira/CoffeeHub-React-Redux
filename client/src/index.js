import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import { combineReducers } from 'redux'
import coffeeReducer from './reducers/manageCoffee'
import userReducer from './reducers/manageUser'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const rootReducer = combineReducers({
	coffee: coffeeReducer,
	user: userReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);