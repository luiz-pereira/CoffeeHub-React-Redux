import React from 'react'

const userDetails = props => {
	document.body.id = 'body-coffee'
	return(
		<div>
			<h2>
				{props.currentUser.userName}
			</h2>
			<h2>
				{props.currentUser.userEmail}
			</h2>
			<h2>
				{props.currentUser.userCompany}
			</h2>
			<h2>
				{props.currentUser.userType}
			</h2>
		</div>
	)
}

export default userDetails