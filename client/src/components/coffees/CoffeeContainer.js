import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchAllCoffees } from '../../actions/coffeeActions'
import { postCoffeeToUser, postRemoveCoffeeFromUser } from '../../actions/userActions'

import CoffeeList from './Coffeelist'
import CoffeeShow from './CoffeeShow'
import { withRouter } from "react-router-dom";


class CoffeeContainer extends Component {

	handleSaveCoffee = (user, coffee) =>{
		this.props.postCoffeeToUser(user, coffee)
	}

	handleUnsaveCoffee = (user, coffee) =>{
		this.props.postRemoveCoffeeFromUser(user, coffee)
	}

	
	render (){
		
		return (
			<>
				<Switch>
					<Route exact path='/coffees' render={() => <CoffeeList loading = {this.props.loading} coffees={this.props.coffees}/>}/>
					<Route path={`${this.props.match.url}/:coffeeId`} render={routerProps => <CoffeeShow {...routerProps} currentUser={this.props.currentUser} logged={this.props.logged} coffees={this.props.coffees} handleSaveCoffee={this.handleSaveCoffee} handleUnsaveCoffee={this.handleUnsaveCoffee}/>} />
				</Switch>
			</>
		)
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
		logged: state.user.logged,
		coffees: state.coffee.coffees,
		loading: state.coffee.loading
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchAllCoffees: () => dispatch(fetchAllCoffees()),
		postCoffeeToUser: (user, coffee) => dispatch(postCoffeeToUser(user, coffee)),
		postRemoveCoffeeFromUser: (user, coffee) => dispatch(postRemoveCoffeeFromUser(user, coffee))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoffeeContainer))