const initialState = {
	logedIn: false
}

export const checkLogIn=  (state = initialState, { type, payload }) => {
	switch (type) {

	case "LOGED_IN":
		return { ...state,  logedIn: !state.logedIn}

	default:
		return state
	}
}
