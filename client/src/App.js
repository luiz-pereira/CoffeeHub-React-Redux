import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getProfileFetch } from './actions/userActions'

import Home from './components/homepage/home'
import SignUp from './components/userHandling/signup';
import SignIn from './components/userHandling/signin';
import CoffeeContainer from './components/coffees/CoffeeContainer';
import NavBarContainer from './components/navbar/NavBarContainer';

class App extends Component {
  state = {
    navbarOpen: false
  }

	componentDidMount = async () => {
		await this.props.getCurrentUser()
  }
	
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
			<Router>
				<div>
					<Route path='/' component={NavBarContainer} />
					<Route exact path='/' component={Home}/>
					<Route exact path='/coffees' component={CoffeeContainer}/>
					<Route exact path='/signup' component={SignUp}/>
					<Route exact path='/signin' component={SignIn}/>
					{/* Criar Component de logout - verificar learn.co delete lab */}
					
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
		getCurrentUser: () => dispatch(getProfileFetch())
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(App)