import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { render } from 'react-dom';


class Coffee extends Component {

	state = {
		like: false
	}
 
	handleClick = () =>{
		this.props.history.push(`/coffees/${this.props.coffee.id}`)
	}

	// handleLike = () =>{
	// 	this.setState({like: true})
	// 	console.log("liked")
	// }

	// handleUnlike = () =>{
	// 	this.setState({like: false})
	// 	console.log("unliked")
	// }
	render(){

	
		return (
			<>
				<div onClick={this.handleClick} className="card">
					<div className="card_image"> 
						<img src={require(`../../assets/coffeeImages/small/${this.props.coffee.imagefile_id}.jpg`)} alt="some coffee!"/> 
					</div>
					<div className="card_title title-white">
						<p>{this.props.coffee.name}</p>
						{/* <p>Liked?{this.state.like ? "Yes!" : "No..."}</p> */}
					</div>
				</div>	
					{/* <button onClick={this.handleLike} className='btn btn-primary'>Like</button>
					<button onClick={this.handleUnlike} className='btn btn-warning'>Unlike</button> */}
					
			</>
		)
		
	}
}



export default withRouter(Coffee)