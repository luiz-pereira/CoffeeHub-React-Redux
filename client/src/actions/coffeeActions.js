export const fetchAllCoffees = () => {
  return dispatch => {
		dispatch ({type: 'LOADING_ALL_COFFEES'})
    fetch("/api/coffees/all")
    .then(resp => resp.json())
    .then(data => {
			dispatch ({ type: "GET_ALL_COFFEES", payload: data})
		})
	}
}