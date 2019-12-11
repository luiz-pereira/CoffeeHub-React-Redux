import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux'
import {Provider} from 'react-redux'
import { combineReducers } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import coffeeReducer from './reducers/manageCoffee'
import userReducer from './reducers/manageUser'

import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/home'
import SignUp from './components/userHandling/signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/animate.css"
import "./styles/home.css"
import "./styles/navbarStyle.css"




const rootReducer = combineReducers({
	coffee: coffeeReducer,
	user: userReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	
	<Router>
		<div>
			<Route path='/' component={Navbar}/>
			<Route exact path='/' component={Home}/>
			<Provider store={store}>
				<Route exact path='/coffees' component={App}/>
			</Provider>
			<Route exact path='/signup' component={SignUp}/>
		</div>
	</Router>,
	document.getElementById('root')
);