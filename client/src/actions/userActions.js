export const userPostFetch = user => {
  return dispatch => {
    return fetch("/buyers/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
					localStorage.setItem("token", data.token)
					try {
						dispatch(loginUser(data.user))
					} catch (err) {
						
					}
        }
      })
  }
}

export const getProfileFetch = () => {
	
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch("/users/auth_session/", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token.
            localStorage.removeItem("token")
          } else {
						try{
							dispatch(loginUser(data))
						} catch {

						}
          }
        })
    }
  }
}

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          // Here you should have logic to handle invalid login credentials.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error
        } else {
					localStorage.setItem("token", data.token)
					try{
						
						dispatch(loginUser(data.user))
					} catch {

					}
        }
      })
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

export const postCoffeeToUser = (user, coffee) => {
	const body = {user: user, coffee: coffee}
	
	const token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("/api/buyers/save_coffee", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(body)
			})
			.then(response => response.json())
			.then(data => {
				
				dispatch(updateSavedCoffees(data))
			})
		}
	}
}

const updateSavedCoffees = (user) => {
	
	return {
		type: "UPDATE_SAVED_COFFEES",
		user: user
	}
}

export const postRemoveCoffeeFromUser = (user, coffee) => {
	
	const body = {user: user, coffee: coffee}
	const token = localStorage.token;
	if (token) {
		return dispatch => {
			return fetch("/api/buyers/unsave_coffee", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify(body)
			})
			.then(response => response.json())
			.then(data => {
				
				dispatch(updateSavedCoffees(data))
			})
		}
	}
}

