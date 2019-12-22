import React from 'react'
import Tasting from './tasting'

const TastingList = props => {

	const tastings = props.tastings.map(tasting => <li><Tasting tasting={tasting}/></li>)

	return(
		<ul>
			{tastings}
		</ul>
	)
}

export default TastingList