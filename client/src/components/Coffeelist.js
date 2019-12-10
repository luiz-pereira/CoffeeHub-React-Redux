import React, {Component} from 'react'
import {connect} from 'react-redux'
import Coffee from './Coffee'


class CoffeeList extends Component{

	render(){
		return (
			<div>
				{/* {this.props.coffees.map(coffee =>  */}
				<li><Coffee/></li>
			</div>
		)
	}

}

const mapStateToProps = state => {
	return {
		coffees: state.coffees,
		user: state.users
	}
}

export default connect(mapStateToProps)(CoffeeList)