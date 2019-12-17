import React, {Component} from 'react'
import {connect} from 'react-redux'
import Coffee from './Coffee'
import LoadinGif from '../loading'


class CoffeeList extends Component{
	render(){
		return (
			<div>
				{this.props.loading ? <LoadinGif /> : null}
				<div className='cards-list'>
					{this.props.coffees.map(coffee =>  <Coffee coffee={coffee}/>)}
				</div>
			</div>
		)
	}

}

export default CoffeeList