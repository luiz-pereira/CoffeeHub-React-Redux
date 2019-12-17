import React from 'react'
import '../../styles/coffees.css'

const Coffee = ({coffee}) => {
	return (
		<div className="card">
			<div className="card_image"> 
				<img src={require(`../../assets/coffeeImages/small/${coffee.imagefile_id}.jpg`)} alt="some coffee!"/> 
			</div>
			<div className="card_title title-white">
				<p>{coffee.name}</p>
			</div>
		</div>	
	)
	
}



export default Coffee