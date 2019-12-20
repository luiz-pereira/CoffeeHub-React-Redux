import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import { combineReducers } from 'redux'

import coffeeReducer from './reducers/manageCoffee'
import userReducer from './reducers/manageUser'

import "./styles/animate.css"
import "./styles/home.css"
import "./styles/navbarStyle.css"
import "./styles/signup.css"
import './styles/custom.scss'
import './styles/coffeeShow.css'
import './styles/coffees.css'





const rootReducer = combineReducers({
	coffee: coffeeReducer,
	user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);