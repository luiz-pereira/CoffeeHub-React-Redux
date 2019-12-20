import React from 'react'
import { withRouter } from 'react-router-dom';


const Coffee = props => {
	 
	const coffee = props.coffee

	const handleClick = () =>{
		props.history.push(`/coffees/${coffee.id}`)
	}

	return (
		<div onClick={handleClick} className="card">
			<div className="card_image"> 
				<img src={require(`../../assets/coffeeImages/small/${coffee.imagefile_id}.jpg`)} alt="some coffee!"/> 
			</div>
			<div className="card_title title-white">
				<p>{coffee.name}</p>
			</div>
		</div>	
	)
	
}



export default withRouter(Coffee)