import React, {Component} from 'react'
import {connect} from 'react-redux'
import Coffee from './Coffee'
import LoadinGif from '../loading'


class CoffeeList extends Component{

	componentDidMount(){
		document.body.id = 'body-coffee'
	}

	render(){
		return (
			<div>
				<div className='cards-list'>
					{this.props.coffees.map(coffee =>  <Coffee coffee={coffee}/>)}
				</div>
			</div>
		)
	}

}

export default CoffeeList