function coffeeReducer (state = {coffees: []}, action){
	switch (action.type) {
		case 'GET_ALL_COFFEES':
					break// fetch all coffees
		case 'GET_SAVED_COFFEES':
					break// fetch all coffees saved by the user
		case 'ADD_COFFEE':
			break
		case 'SAVE_COFFEE':
			break
		case 'DELETE_COFFEE':
			break
		case 'UNSAVE_COFFEE':
			break
		default:
			return state
	}
}

export default coffeeReducer