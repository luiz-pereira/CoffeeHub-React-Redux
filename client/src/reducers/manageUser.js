function userReducer (state = {userName: '', userEmail:'', userId: '', userType: '', userCompany: ''}, action){
	switch (action.type) {
		case 'ADD_USER':
			break
			// fetch all coffees
		case 'DELETE_USER':
			break
			// fetch all coffees saved by the user
		case 'LOGIN':
			break

		case 'LOGOUT':
			break

		default:
			return state
	}
}

export default userReducer