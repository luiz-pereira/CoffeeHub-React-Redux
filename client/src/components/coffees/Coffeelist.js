import React from 'react'
import Coffee from './Coffee'
import LoadinGif from '../loading'


const CoffeeList = props => {
	document.body.id = 'body-coffee'
	return (
		<div>
			<div className='cards-list'>
				{props.coffees.map(coffee =>  <Coffee coffee={coffee}/>)}
			</div>
		</div>
	)
}

export default CoffeeList