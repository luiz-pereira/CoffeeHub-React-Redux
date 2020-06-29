import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route , Switch } from 'react-router-dom'

import CoffeeList from '../coffees/Coffeelist'
import TastingList from './tastingList'
import UserDetails from './userDetails'

class userProfileContainer extends Component {
	
	
	render(){
		
		const tastings = this.props.currentUser.tastings
		
		const currentUser = this.props.currentUser
		const coffees = this.props.coffees.filter(coffee => currentUser.savedCoffees.includes(coffee.id))
		
		return (
			<Switch>
				<Route exact path='/user/profile' render={() => <UserDetails currentUser={currentUser} />}/>
				<Route exact path='/user/profile/saved_coffees' render={() => <CoffeeList loading={this.props.loading} coffees={coffees} />}/>
				<Route exact path='/user/profile/tastings' render={() => <TastingList tastings={tastings} />}/>
				<Route exact path='/user/profile/details' render={() => <UserDetails currentUser={currentUser} />}/>
			</Switch>
		)

	}

}

const mapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
		coffees: state.coffee.coffees
	}
}

export default connect(mapStateToProps)(userProfileContainer)