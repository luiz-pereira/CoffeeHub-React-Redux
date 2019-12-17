function userReducer (state = {currentUser: {userName: '', userEmail:'', userId: '', userType: '', userCompany: ''}, logged: false}, action){
	switch (action.type) {
		case 'LOGIN_USER':
			return {...state, currentUser: {
				userName: action.payload.name,
				userEmail: action.payload.email,
				userId: action.payload.id,
				userType: action.payload.category,
				userCompany: action.payload.company
			}, logged: true}
		case 'LOGOUT_USER':
			localStorage.removeItem("token")
			return {...state, currentUser: {userName: '', userEmail:'', userId: '', userType: '', userCompany: ''}, logged: false}
		default:
			return state
	}
}

export default userReducer