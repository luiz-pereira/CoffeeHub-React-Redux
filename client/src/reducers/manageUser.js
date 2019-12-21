function userReducer (state = {currentUser: {userName: '', userEmail:'', userId: '', userType: '', userCompany: '', savedCoffees: []}, logged: false}, action){
	switch (action.type) {
		case 'LOGIN_USER':
			return {...state, currentUser: {
				userName: action.payload.name,
				userEmail: action.payload.email,
				userId: action.payload.id,
				userType: action.payload.category,
				userCompany: action.payload.company,
				savedCoffees: action.payload.coffees.map(coffee => coffee.id)
			}, logged: true}
		case 'LOGOUT_USER':
			localStorage.removeItem("token")
			return {...state, currentUser: {userName: '', userEmail:'', userId: '', userType: '', userCompany: ''}, logged: false}
		case 'UPDATE_SAVED_COFFEES':
			return {...state, currentUser:{...state.currentUser, savedCoffees: action.user.coffees.map(coffee => coffee.id)}}
		default:
			return state
	}
}

export default userReducer