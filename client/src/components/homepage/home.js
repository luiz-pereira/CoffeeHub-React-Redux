import React, {Component} from 'react'
import "./css/animate.css"
import "./css/home.css"
import "./css/card.css"

export default class Home extends Component {

	render (){

		return (
			<body>
				<section class="intro">
						<div class='inner'>
							<div class='content'>
								<section id='title' class="animated bounceInUp" >
									<h1>CoffeeHub</h1>
								</section>
								<section class="animated bounceInUp" >
									<a id='btn' href="">See Coffees</a>
								</section>
							</div>
						</div>
					</section>
			</body>
		)
	}
}