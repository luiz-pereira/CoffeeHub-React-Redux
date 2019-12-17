import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchAllCoffees } from '../../actions/coffeeActions'

import CoffeeList from './Coffeelist'


class CoffeeContainer extends Component {

	componentDidMount() {
		this.props.fetchAllCoffees()
	}
	
	render (){
		return (
			<CoffeeList loading = {this.props.loading} coffees={this.props.coffees}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContainer)