import React, {Component} from 'react'


export default class Home extends Component {

	render (){

		return (
			<section id="intro">
				<div id='inner'>
					<div id='content'>
						<section id='title' className="animated bounceInUp" >
							<h1>CoffeeHub</h1>
						</section>
						<section id='see-coffees' className="animated bounceInUp" >
							<a id='btn' href="/coffees">See Coffees</a>
						</section>
					</div>
				</div>
			</section>
		)
	}
}