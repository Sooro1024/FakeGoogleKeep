const initialState = {
	logedIn: false
}

export const checkLogIn=  (state = initialState, { type, payload }) => {
	switch (type) {

	case "LOGED_IN":
		return { ...state,  logedIn: payload}

	default:
		return {...state}
	}
}
