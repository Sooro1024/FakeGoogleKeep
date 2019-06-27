const initialState = {
	data: ['nothing']
}

export const getData =  (state = initialState, action) => {
	switch (action.type) {

	case "FETCH_DATA":
		return { ...state, data: action.payload}

	default:
		return {...state}
	}
}
