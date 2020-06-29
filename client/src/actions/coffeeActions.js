export const fetchAllCoffees = () => {
	console.log('c')

	return dispatch => {
		dispatch ({type: 'LOADING_ALL_COFFEES'})
    fetch("/api/coffees/all")
    .then(resp => resp.json())
    .then(data => {
			console.log('d')

			dispatch ({ type: "GET_ALL_COFFEES", payload: data})
		})
	}
}