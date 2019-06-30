const initialState = {
	auth: false,
	authError: null
};

export const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SIGN_IN_FAILED':
			return { ...state, authError: payload };
		case 'SIGN_IN_SUCCESS':
			return { ...state, auth: true, authError: null };
		case 'SIGN_OUT_SUCCESS':
			return { ...state, auth: false, authError: null };
		case 'SIGN_OUT_FAILED':
			return { ...state, auth: true, authError: payload };
		default:
			return state;
	}
};
