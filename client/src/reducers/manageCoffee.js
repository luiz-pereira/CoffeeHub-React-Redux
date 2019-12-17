import { bindActionCreators } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/redux"

function coffeeReducer (state = {coffees: [], loading: false}, action){
	switch (action.type) {
		case 'GET_ALL_COFFEES':
			return {...state, coffees: action.payload, loading:false}			
		case 'LOADING_ALL_COFFEES':
			return {...state, loading: true}
		case 'GET_SAVED_COFFEES':
			break// fetch all coffees saved by the user
		case 'LOADING_SAVED_COFFEES':
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