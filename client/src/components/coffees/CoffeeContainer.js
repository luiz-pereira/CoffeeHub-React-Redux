import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchAllCoffees } from '../../actions/coffeeActions'

import CoffeeList from './Coffeelist'
import CoffeeShow from './CoffeeShow'
import { withRouter } from "react-router-dom";


class CoffeeContainer extends Component {

	componentDidMount() {
		this.props.fetchAllCoffees()
	}
	
	render (){
		return (
			<>
				<Switch>
					<Route exact path='/coffees' render={() => <CoffeeList loading = {this.props.loading} coffees={this.props.coffees}/>}/>
					<Route path={`${this.props.match.url}/:coffeeId`} render={routerProps => <CoffeeShow {...routerProps} coffees={this.props.coffees}/>} />
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
		fetchAllCoffees: () => dispatch(fetchAllCoffees())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CoffeeContainer))