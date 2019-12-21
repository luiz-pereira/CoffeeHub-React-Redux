import React from 'react'


const Home = () => {
	document.body.id = 'root'
	return (
		<div id="intro container h-100">
			<div id='inner'>
				<div id='content'>
					<h1 id='title' className="animated bounceInUp text-center">CoffeeHub</h1>
					<a id='see-coffees' className="animated bounceInUp text-center" href="/coffees">See Coffees</a>
				</div>
			</div>
		</div>
	)
}

export default Home