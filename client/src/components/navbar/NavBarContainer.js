import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logoutUser} from '../../actions/userActions'

import Navbar from './Navbar'

class NavbarContainer extends Component {
	
	handleLogout = () => {
		this.props.logout()
		this.props.history.push('/')
	}
	render() {
		return(
			<Navbar handleLogout={this.handleLogout} currentUser={this.props.currentUser} logged={this.props.logged}/>
		)

	}

}

const MapStateToProps = state => {
	return {
		currentUser: state.user.currentUser,
		logged: state.user.logged
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logoutUser())
	}
}

export default connect(MapStateToProps, mapDispatchToProps)(NavbarContainer)