import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getProfileFetch } from './actions/userActions'
import {fetchAllCoffees} from './actions/coffeeActions'

import Home from './components/homepage/home'
import SignUp from './components/userHandling/signup';
import SignIn from './components/userHandling/signin';
import CoffeeContainer from './components/coffees/CoffeeContainer';
import NavBarContainer from './components/navbar/NavBarContainer';
import userProfileContainer from './components/userHandling/userProfileContainer'

class App extends Component {

	componentDidMount = async () => {
		await this.props.getCurrentUser()
		await this.props.fetchAllCoffees()
  }
	
  render() {

    return (
			<Router>
				<div>
					<Route path='/' component={NavBarContainer} />
					<Route exact path='/' component={Home}/>
					<Route path='/coffees' render={routerProps => <CoffeeContainer {...routerProps} />}/>
					<Route exact path='/signup' component={SignUp}/>
					<Route exact path='/signin' component={SignIn}/>
					<Route path='/user/profile' component={userProfileContainer}/>
				</div>
			</Router>
    )
  }
}

const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
		logged: state.user.logged
	}
}

const mapDispatchToProps = dispatch => {
	return ({
		getCurrentUser: () => dispatch(getProfileFetch()),
		fetchAllCoffees: () => dispatch(fetchAllCoffees())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(App)